import React,{ useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useWindowSize from "../hooks/useWindowSize";
import { getAllOrders } from "../api/UserRequests";
import { DataGrid } from "@mui/x-data-grid";

const Orders = () => {
  const { width } = useWindowSize();
    const [allOrders, setAllOrders ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const update = ["preparing", "on the way", "delivered"];

    useEffect(() => {
        const fetchOrders = async () => {
            setIsLoading(isLoading)
            const getOrders = await getAllOrders();
            const getOrdersData = getOrders.data
            setAllOrders(getOrdersData);
            setIsLoading(!isLoading)
        };
        fetchOrders();
    },[])

    function getStatus(params) {
        return update[params.row.status+1];
    }
    const columns = [
        {
        field: "_id",
        headerName: "ID",
        flex: 1,
        },
        {
        field: "customer",
        headerName: "Customer",
        flex: 0.5,
        },
        {
        field: "address",
        headerName: "Address",
        flex: 0.5,
        },
        {
        field: "status",
        headerName: "Status",
        flex: 0.5,
        },
        {
        field: "total",
        headerName: "Total",
        flex: 1,
        },
    ];

    return (
        
        <Box className="mt-4 mx-4">
            {/*Dashboard Header*/}
            <div className="flex flex-row mt-20 sm:mt-2 mb-2 justify-between">
            <p className="font-bold dark:text-gray-400 text-xl">Finch Tea Orders</p>
            <p className="text-xs text-gray-500 flex flex-row items-center gap-2"> </p>
            </div>
        
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
            loading={!allOrders}
            getRowId={(row) => row._id}
            rows={allOrders || []}
            columns={columns}
            />
            {isLoading ? <div className="absolute left-1/2 top-1/2 z-50"><Spinner/></div> : <></>}
        </Box>
        </Box>
    );
};

export default Orders;
