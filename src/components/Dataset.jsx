import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper} from '@mui/material';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Search from '../components/Search';
import { IoMdDownload, IoMdPrint } from "react-icons/io";


import * as XLSX from "xlsx";


const Dataset = () => {
    const [search, setSearch] = useState("");

        const columns = [
  { field: 'ID', headerName: 'ID', width: 50 },
  { field: 'fullName', headerName: 'Full name', width: 130 },
    { field: 'fatherName', headerName: 'Father name', width: 130 },
  { field: 'course', headerName: 'Course', width: 70 },
   { field: 'feeDeposit', headerName: 'Fees Amount', width: 130 },
   { field: 'depositDate', headerName: 'Deposit Date', width: 120 },
    { field: 'receiptNo', headerName: 'Receipt No', width: 120 },
     { field: 'mob', headerName: 'Mobile No', width: 130 },
     {field:'deposit_by', headerName: 'Deposit By', width:130}
     

  

];



const rows = [
  { id: 1, fullName: 'Suhel Ali',  course:'ADCA', feeDeposit:1000, depositDate:`11/12/2025`, receiptNo:1, deposit_by:"Mizan", mob:`+9139939399393`},
 { id: 2, fullName: 'Seraj Ali',  course:'ADCA', feeDeposit:1000, depositDate:`11/12/2025`, receiptNo:2, deposit_by:"Mizan", mob:`+9139939399393`},
];

const paginationModel = { page: 0, pageSize: 5 };


const filteredRow = rows.filter((row) =>
    Object.values(row).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase()) 
 
 
    )
);

const exportexcel = (data)=>{
    // convert JSON → worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);


  // create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // download file
  XLSX.writeFile(workbook, "Data.xlsx");
}

    return (
    <div className=' w-full h-screen flex text-xl justify-center  items-center gap-10 text-yellow-200' >
        <Paper className='bg-gray-900' sx={{height:400, width:'100%'}}>
       <div className="search flex justify-center items-center gap-80">
          <Search
       onChange={(e) => setSearch(e.target.value)}

         />

     
           <Button onClick={()=> exportexcel(filteredRow)} variant="contained" className='flex gap-2'>     <IoMdDownload aria-label='Export' size={20} />Export</Button>
         
         
     <IoMdPrint color='grey'  size={25} onClick={() => window.print()}/>
    </div>
     
    <DataGrid
    
    columns={columns}
    rows={filteredRow}
    initialState={{pagination:{paginationModel}}}
    pageSizeOptions={[5, 10]}
    checkboxSelection
    sx={{border:0}}
    />

   </Paper>
   
         
        </div>
    );
}

export default Dataset;
