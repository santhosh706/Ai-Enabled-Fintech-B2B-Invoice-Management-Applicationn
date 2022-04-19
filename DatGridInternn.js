import React, { useState, useEffect } from 'react'; 
import { DataGrid } from '@mui/x-data-grid';

const columns=[
    {field: 'sl_no',headerName:'Sl No',width:80},
    {field: 'business_code',headerName:'Business Code',width:110},
    {field: 'cust_number',headerName:'Customer Number',width:180},
    {field: 'clear_date',headerName:'Clear Date',width:180},
    {field: 'buisness_year',headerName:'Buisness Year',width:180},
    {field: 'doc_id',headerName:'Document id',width:180},
    {field: 'posting_date',headerName:'Posting Date',width:180},
    {field: 'document_create_date',headerName:'Document Create Date',width:180},
    {field: 'document_create_date1',headerName:'Document Create Date1',width:180},
    {field: 'due_in_date',headerName:'Due Date',width:180},
    {field: 'invoice_currency',headerName:'Invoice Currency',width:110},
    {field: 'document_type',headerName:'Document Type',width:110},
    {field: 'posting_id',headerName:'Posting Id',width:80},
    {field: 'area_business',headerName:'Area Business',width:80},
    {field: 'total_open_amount',headerName:'Total Open Amount',width:180},
    {field: 'baseline_create_date',headerName:'BaseLine Create Date',width:180},
    {field: 'cust_payment_terms',headerName:'Customer Payment Terms',width:80},
    {field: 'invoice_id',headerName:'Invoice Id',width:180},
    {field: 'isOpen',headerName:'Is Open',width:80},
    {field: 'aging_bucket',headerName:'Aging Bucket',width:80},
    {field: 'is_deleted',headerName:'Is Deleted',width:80},
  

]
const DataGridInternn = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/WinterInternship/Fetch")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])
// const[pageSize,setpageSize]=React.useState(10);
  console.log(tableData)

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        getRowId={(data)=>data.sl_no}
        // onPageSizeChange={(newPage)=> setpageSize(newPage)}
        // rowsPerPageOptions={[5,10,20]}
        // pagination
        //    {...tableData}
      />
    </div>
  )
}

export default DataGridInternn


 
