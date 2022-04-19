import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Box } from '@mui/material';
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import axios from "axios";

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

const AdvanceSearching = () => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const createNewinv = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <Button
        id="advanced"
        variant="outlined"
        size="medium"
        onClick={handleClickOpen}
      >
        ADVANCE SEARCH
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ backgroundColor: "#2A3E4C", color: "#fff" }}
          id="alert-dialog-title"
        >
          Advance Search
        </DialogTitle>

        <DialogContent style={{ backgroundColor: "#2A3E4C" }}>
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
                autoComplete="off"
              >
                <TextField id="filled" label="Customer ID" variant="filled" />
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '31ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled" label="Invoice ID" variant="filled" />
              </Box>
            </Grid>

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
                autoComplete="off"
              >
                <TextField id="filled" label="Customer Number" variant="filled" />
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '31ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled" label="Business Year" variant="filled" />
              </Box>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button style={deleteTheme.but}>SEARCH</Button>
          <Button style={deleteTheme.but1} onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdvanceSearching;