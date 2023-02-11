import React,{ useState, useEffect } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { MdTableRows } from "react-icons/md";
import { BsFillGrid3X3GapFill, BsPlusLg } from "react-icons/bs";
import { useStateContext } from '../contexts/ContextProvider';
import Avatar from "@mui/material/Avatar";
import useWindowSize from "../hooks/useWindowSize";
import { DataGrid } from "@mui/x-data-grid";
import { getAllProducts } from "../api/UserRequests"
import Spinner from "../components/Spinner";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

const Products = () => {
    const { currentColor } = useStateContext();
    const { width } = useWindowSize();
    const [isGrid, setIsGrid] = useState(true)
    const [allProducts, setAllProducts ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(isLoading)
            const getProducts = await getAllProducts();
            const getProductsData = getProducts.data
            setAllProducts(getProductsData);
            setIsLoading(!isLoading)
        };
        fetchProducts();
    },[])   

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
      };
    
      const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
      };
    
      const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
      };
    
    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "finch-restaurant");
        try {
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dwxdztigp/image/upload",
            data
          );
    
          const { url } = uploadRes.data;
          const newProduct = {
            title,
            desc,
            prices,
            extraOptions,
            img: url,
          };
    
          await axios.post("https://finch-tea.vercel.app/api/products", newProduct);
        } catch (err) {
          console.log(err);
        }
      };

    const columns = [
        {
        field: "img",
        width: 200,
        renderCell: (params) => {console.log('params', params); return (<><Avatar src={params.value}/></> )}, 
        headerName: "Image",
        flex: 0.25,
        },
        {
        field: "_id",
        headerName: "ID",
        flex: 0.25,
        },
        {
        field: "title",
        headerName: "Title",
        flex: 0.5,
        },
        // {
        // field: "prices",
        // headerName: "Prices",
        // renderCell: {prices.map((price) => (<p>{price}</p>))}, 
        // flex: 0.5,
        // },
    ];

    return (
        <Box className="mt-4 mx-4">
            {/*Dashboard Header*/}
            <div className="flex flex-row mt-20 sm:mt-2 mb-2 justify-between">
            <p className="font-bold dark:text-gray-400 text-xl">Finch Tea Products</p>
            <div className="flex flex-row justify-evenly gap-2 items-center">
            <button className="px-4 py-1 h-9 rounded-md drop-shadow-xl dark:hover:bg-gray-700 w-14 grid place-content-center dark:hover:border-gray-500 dark:hover:border hover:bg-slate-200  dark:bg-secondary-dark-bg"  onClick={handleOpen}>
                <BsPlusLg fill={currentColor} size="24"/>
            </button>
            <button className="px-4 py-1 h-9 rounded-md drop-shadow-xl dark:hover:bg-gray-700 w-14 grid place-content-center dark:hover:border-gray-500 dark:hover:border hover:bg-slate-200  dark:bg-secondary-dark-bg" onClick={() => setIsGrid(!isGrid)}>
                {isGrid ? <MdTableRows fill={currentColor} size="28"/> : <BsFillGrid3X3GapFill fill={currentColor} size="24"/>}
            </button>
            </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a new product
                </Typography>
                
                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '13px' }}>
                Choose an image
                </Typography>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '13px' }}>
                Title
                </Typography>
                <input
                    type="text"
                    className="w-full bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '13px' }}>
                Description
                </Typography>
                <textarea
                    rows={3}
                    type="text"
                    className="w-full bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                    onChange={(e) => setDesc(e.target.value)}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '13px' }}>
                Prices
                </Typography>
                <div className="flex flex-row gap-2 justify-between">
                    <input
                        type="number"
                        className="w-24 bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                        placeholder="Small"
                        onChange={(e) => changePrice(e, 0)}
                    />
                    <input
                        type="number"
                        className="w-24 bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                        placeholder="Medium"
                        onChange={(e) => changePrice(e, 1)}
                    />
                    <input
                        type="number"
                        className="w-24 bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                        placeholder="Large"
                        onChange={(e) => changePrice(e, 2)}
                    />
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '13px' }}>
                Extra
                </Typography>
                <div className="flex flex-row gap-2 justify-between">
                    <input
                        type="text"
                        className="w-24 bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                        placeholder="Item"
                        name="text"
                        onChange={handleExtraInput}
                    />
                    <input
                        type="number"
                        className="w-24 bg-white text-black dark:text-gray-200 dark:bg-secondary-dark-bg border  "
                        placeholder="Price"
                        name="price"
                        onChange={handleExtraInput}
                    />
                    <button onClick={handleExtra} className="w-24 bg-gray-300 border-gray-400 text-black dark:text-gray-200 dark:bg-secondary-dark-bg border rounded  ">
                    Add
                    </button>
                </div>
                <div className="my-2 flex flex-wrap">
                    {extraOptions.map((option) => (
                    <span className="p-1 border border-gray-400 bg-white mr-2 rounded-lg cursor-pointer" key={option.text}>
                        {option.text}
                    </span>
                    ))}
                </div>
                <button onClick={handleCreate} className="mt-6 bg-gray-300 border-gray-400 py-1 w-full text-black dark:text-gray-200 dark:bg-secondary-dark-bg border rounded">
                Disabled
                </button>
                </Box>
            </Modal>
            
        {!isGrid ? 
        <Box
            className="mt-2 lg:mt-10 relative"
            height={width > 1100 ? "75vh" : width < 500 ? "75vh" : "65vh"}
            sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #696880",
                color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#33373E",
                color: "#fff",
                borderBottom: "1px solid white",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#33373E",
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#33373E",
                color: "#fff",
                borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${"white"} !important`,
            },
            "& .css-rtrcn9-MuiTablePagination-root": {
                color: `${"white"} !important`,
            },
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions": {
                color: `${"white"} !important`,
            },
            "& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
                color: `${"white"} !important`,
            },
            "& MuiTablePagination-selectLabel css-pdct74-MuiTablePagination-selectLabel": {
                color: `${"white"} !important`,
            },
            }}
        >
            <DataGrid
            loading={!allProducts}
            getRowId={(row) => row._id}
            rows={allProducts || []}
            columns={columns}
            />
        </Box> :
        <div className="flex flex-wrap w-full mt-10 mb-4 justify-between gap-4 items-center relative">
            {allProducts.map((item) => (
            <div key={item.title} className="drop-shadow-xl dark:hover:bg-gray-800 hover:bg-slate-200 cursor-pointer relative flex-grow bg-white h-36 text-black dark:text-gray-200 dark:bg-secondary-dark-bg mt-2 sm:mt-0 w-full lg:w-64 xl:w-64 p-3 rounded-2xl ">
                
                    <div className="w-3 h-full absolute top-0 left-0 overflow-hidden rounded-l-2xl bg-gray-400 dark:bg-gray-600"></div>
                    <p className="text-sm ml-2 truncate">{item.title}</p>
                    <div className="flex flex-row justify-between items-center mt-2 ml-2">
                        <img
                            src={item.img}
                            className="rounded-md w-20 h-20"
                        />
                        <div className="text-right flex-wrap w-3/5">
                            
                            <div className="flex flex-row justify-between w-full text-xs text-black dark:text-gray-400">
                                <div>S: ₱{item.prices[0]}</div>
                                <div>M: ₱{item.prices[1]}</div>
                                <div>L: ₱{item.prices[2]}</div>
                            </div>
                            <span className="text-xs">
                                {item.extraOptions.map((extra) => (
                                <p className="text-xs text-black dark:text-gray-400" key={extra._id}>{extra.text} - {extra.price}</p>
                                ))}
                            </span>
                            {/* <p className="text-xs text-gray-400 truncate">{item._id}</p> */}
                            

                            
                        </div>
                        
                    </div>
                    
                
            </div>
            ))}
        </div>
        }
        {isLoading ? <div className="absolute left-1/2 top-1/2 z-50"><Spinner/></div> : <></>}
        </Box>
    );
};

export default Products;
