import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "./style.css";
import { TextField } from "@material-ui/core";
import { Box } from '@mui/material';

const styles = {
  but: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "1.8rem",
    fontSize: ".7rem",
    margin: "1rem",
    color: "#fff",
  },
  but1: {
    backgroundColor: "#14AFF1",
    border: "1px solid #14AFF1",
    height: "1.8rem",
    fontSize: ".7rem",
    color: "#fff",
  },
  text1: {
    position: "relative",
    bottom: "1.5rem",
    left: "1.1rem",
    border: "1px solid #356680",
  },
  text2: {
    outline: "none",
    boxShadow: "none",
    position: "relative",
    bottom: "1.5rem",
    left: "6rem",
    border: "1px solid #356680",
    height: "10rem",
  },
};

const deleteTheme = {
  but: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "1.8rem",
    fontSize: ".9rem",
    color: "#fff",
    margin: "1.5vh",
    width: "50%",
  },
  but1: {
    backgroundColor: "#14AFF1",
    border: "1px solid #14AFF1",
    height: "1.8rem",
    fontSize: ".9rem",
    color: "#fff",
    width: "50%",
  },
};

// var global;
// export function Edit(props) {
//   global = props;
//   return <div>{console.log(props)}</div>;
// }

const EditFun = () => {
  const [open, setOpen] = React.useState(false);
  const [invoice_currency, setInvoiceCurrency] = React.useState("");
  const [cust_payment_terms, setCustPaymentTerms] = React.useState("");

  let sl_no = localStorage.getItem("sl_no");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInvoice = (event) => {
    setInvoiceCurrency(event.target.value);
  };
  const handleCustPaymentTerms = (event) => {
    setCustPaymentTerms(event.target.value);
  };

  const createNewinv = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data1 =
      "invoice_currency=" +
      invoice_currency +
      "&cust_payment_terms=" +
      cust_payment_terms +
      "&sl_no=" +
      sl_no;
    let response = await axios.get(
      `http://localhost:8080/WinterInternship/Update?`+ data1
    );
    setOpen(false);
    return response.data1;
  };

  return (
    <>
      <Button id="edit" variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          style={{ backgroundColor: "#2A3E4C", color: "#fff" }}
          id="form-dialog-title"
        >
          Edit
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#2A3E4C" }}>
          {/* <span style={{ color: "#97A1A9" }}>Invoice Amounts</span> */}
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
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '31ch' },
                }}
                noValidate
                value={invoice_currency}
                autoComplete="off"
              >
                <TextField id="filled" label="Invoice Currency" variant="filled" onChange={handleInvoice} />
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <br /> */}
              {/* <span style={{ color:"#97A1A9" }}>Notes</span> */}
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '31ch' },
                }}
                noValidate
                value={cust_payment_terms}
                autoComplete="off"
              >
                <TextField id="filled" label="Customer Payment Terms" variant="filled" onChange={handleCustPaymentTerms} />
              </Box>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but} onClick={handleSubmit}>EDIT</Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

EditFun.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EditFun;