import React,{ useState, useEffect } from "react";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useWindowSize from "../hooks/useWindowSize";
import Spinner from "../components/Spinner";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers } from "../api/UserRequests"

const Users = () => {
    const { width } = useWindowSize();
    const [allUsers, setAllUsers ] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(isLoading)
            const getUsers = await getAllUsers();
            const getUsersData = getUsers.data
            setAllUsers(getUsersData);
            setIsLoading(!isLoading)
        };
        fetchUsers();
    },[])

    const columns = [
        {
        field: "picturePath",
        width: 200,
        renderCell: (params) => { return (<><Avatar src={params.value}/></> )}, 
        headerName: "Photo",
        flex: 0.25,
        },
        {
        field: "_id",
        headerName: "ID",
        flex: 0.5,
        },
        {
        field: "firstName",
        headerName: "First Name",
        flex: 0.5,
        },
        {
        field: "lastName",
        headerName: "Last Name",
        flex: 0.5,
        },
        {
        field: "email",
        headerName: "Email",
        flex: 1,
        },
        {
        field: "role",
        headerName: "Role",
        flex: 0.25,
        }
    ];

    return (
        
        <Box className="mt-4 mx-4">
            {/*Dashboard Header*/}
            <div className="flex flex-row mt-20 sm:mt-2 mb-2 justify-between">
            <p className="font-bold dark:text-gray-400 text-xl">NeuBlock Users</p>
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
            loading={!allUsers}
            getRowId={(row) => row._id}
            rows={allUsers || []}
            columns={columns}
            />
            {isLoading ? <div className="absolute left-1/2 top-1/2 z-50"><Spinner/></div> : <></>}
        </Box>
        </Box>
    );
};

export default Users;