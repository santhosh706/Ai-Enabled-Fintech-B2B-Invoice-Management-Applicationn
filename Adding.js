import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import "./Adding.css";
import axios from "axios";
import {Box} from '@mui/material';
import { Grid } from "@material-ui/core";
import "./style.css";

const deleteTheme = {
  but: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "2.5rem",
    fontSize: ".9rem",
    color: "#fff",
    margin: "1.5vh",
    width: "50%",
  },
  but1: {
    backgroundColor: "#14AFF1",
    border: "1px solid #14AFF1",
    height: "2.5rem",
    fontSize: ".9rem",
    color: "#fff",
    width: "50%",
  },
};

function Adding() {
  const [open, setOpen] = React.useState(false);

  const [business_code, setBusinesscode] = React.useState("");
  const [cust_number, setCustnum] = React.useState("");
  const [clear_date, setClrdate] = React.useState("");
  const [buisness_year, setBusinessyear] = React.useState("");

  const [doc_id, setDocid] = React.useState("");
  const [posting_date, setPostindate] = React.useState("");
  const [document_create_date, setDoccreatedate] = React.useState("");
  const [due_in_date, setDuedate] = React.useState("");

  const [invoice_currency, setInvcurr] = React.useState("");
  const [document_type, setDoctype] = React.useState("");
  const [posting_id, setPostingid] = React.useState("");
  const [total_open_amount, setTotalopenamt] = React.useState("");

  const [baseline_create_date, setBaselinecredate] = React.useState("");
  const [invoice_id, setInvoiceid] = React.useState("");
  const [cust_payment_terms, setCustpaymntnum] = React.useState("");

  const handlebusinesscode = (event, index) => {
    setBusinesscode(event.target.value);
  };
  const handlecustnum = (event, index) => {
    setCustnum(event.target.value);
  };
  const handleclrdate = (event, index) => {
    setClrdate(event.target.value);
  };
  const handlebusinessyear = (event, index) => {
    setBusinessyear(event.target.value);
  };

  const handledocid = (event, index) => {
    setDocid(event.target.value);
  };

  const handlepostindate = (event, index) => {
    setPostindate(event.target.value);
  };

  const handledoccreatedate = (event, index) => {
    setDoccreatedate(event.target.value);
  };
  const handleduedate = (event, index) => {
    setDuedate(event.target.value);
  };

  const hadleinvcurr = (event, index) => {
    setInvcurr(event.target.value);
  };
  const handledoctype = (event, index) => {
    setDoctype(event.target.value);
  };
  const handlepostingid = (event, index) => {
    setPostingid(event.target.value);
  };
  const handletotalopenamt = (event, index) => {
    setTotalopenamt(event.target.value);
  };

  const handlebaselinecredate = (event, index) => {
    setBaselinecredate(event.target.value);
  };
  const handleinvoiceid = (event, index) => {
    setInvoiceid(event.target.value);
  };
  const handlecustpaymntnum = (event, index) => {
    setCustpaymntnum(event.target.value);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
  {

    let response = await axios.get(
      `http://localhost:8080/WinterInternship/Add?`,
      {
        params: {
          business_code,
          cust_number,
          clear_date,
          buisness_year,
          doc_id,
          posting_date,
          document_create_date,
          due_in_date,
          invoice_currency,
          document_type,
          posting_id,
          total_open_amount,
          baseline_create_date,
          cust_payment_terms,
          invoice_id
        },
      },
      setOpen(false)
    );


  
  }
};

  const createNewinv = (e) => {
    e.preventDefault();

  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        id="add"
        variant="outlined"
        size="medium"
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={"lg"}
        height="0%"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Add
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
          <form
            id="form"
            onSubmit={(e) => {
              createNewinv(e);
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Business Code" type="text" value={business_code} 
                            onChange={handlebusinesscode} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Customer Number" type="text"
                value={cust_number}
                required
                onChange={handlecustnum} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                id = "filled1"
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 0.5, width : '30ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                id="date"
                label="Clear Date"
                type="date"
                value={clear_date}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleclrdate}
              />
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Business Year" type="text"
                value={buisness_year}
                
                onChange={handlebusinessyear} variant='filled'/>
              </Box>
              
            </Grid>
            <br></br>

            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Document id" type="text"
                value={doc_id}
                onChange={handledocid} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              <Box
                id = "filled1"
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 0.5, width : '30ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                id="date"
                label="Posting Date"
                type="date"
                value={posting_date}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handlepostindate}
              />
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                id = "filled1"
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 0.5, width : '30ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                id="date"
                label="Document Create Date"
                type="date"
                value={document_create_date}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handledoccreatedate}
              />
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                id = "filled1"
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 0.5, width : '30ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                id="date"
                label="Due in Date"
                type="date"
                value={due_in_date}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleduedate}
              />
              </Box>
              
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Invoice Currency" type="text"
                value={invoice_currency}
                onChange={hadleinvcurr} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Document Type" type="text"
                value={document_type}
                onChange={handledoctype} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Posting id" type="text"
                value={posting_id}
                onChange={handlepostingid} variant='filled'/>
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Total Open Amont" type="text"
                value={total_open_amount}
                onChange={handletotalopenamt} variant='filled'/>
              </Box>
              
            </Grid>
            <br></br>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                id = "filled1"
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 0.5, width : '30ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                id="date"
                label="Baseline Create Date"
                type="date"
                value={baseline_create_date}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handlebaselinecredate}
              />
              </Box>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Invoice id" type="text"
                value={invoice_id}
                onChange={handleinvoiceid} variant='filled'/>
              </Box>
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component = "form"
                sx={{
                  '& > : not(style)':{ m : 1, width : '31ch' },
                }}
                noValidate
                autoComplete="off">
                  <TextField id='filled' label="Customer Payment Terms" type="text"
                value={cust_payment_terms}
                onChange={handlecustpaymntnum} variant='filled'/>
              </Box>
              
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but} onClick={handlesubmit}>
            ADD
          </Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Adding;