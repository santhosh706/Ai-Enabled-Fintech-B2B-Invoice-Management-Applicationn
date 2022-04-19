// import React, { useEffect } from "react";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import CloseIcon from "@material-ui/icons/Close";
// import axios from "axios";
// //import Table_data from "./axiosComponent";
// import { useState } from "react";
// import "./style.css";

// const deleteTheme = {
//   but: {
//     backgroundColor: "#273D49",
//     border: "1px solid #14AFF1",
//     height: "1.8rem",
//     fontSize: ".9rem",
//     color: "#fff",
//     margin: "1.5vh",
//     width: "50%",
//   },
//   but1: {
//     backgroundColor: "#14AFF1",
//     border: "1px solid #14AFF1",
//     height: "1.8rem",
//     fontSize: ".9rem",
//     color: "#fff",
//     width: "50%",
//   },
// };

// // var data;
// // export const Tempcomponent = (props) => {
// //   data = props;
// //   return props;
// // };
// let sl_no = localStorage.getItem("sl_no");

// const Deleting = () => {
//   const [open, setOpen] = useState(false);

//   function handleClickOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   const Delete = async (event) => {
//     event.preventDefault();
//     let data2 = "sl_no=" + sl_no;
//     let response = await axios.get(
//       `http://localhost:8080/WinterInternship/Deletee?` + data2
//     );
//     return response.data2;
//   };

//   return (
//     <>
//       <Button
//         id="delete"
//         variant="outlined"
//         onClick={handleClickOpen}
//       >
//         Delete
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle
//           style={{ backgroundColor: "#2A3E4C", color: "#fff" }}
//           id="alert-dialog-title"
//         >
//           Delete Record(s)?
//           <CloseIcon
//             style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
//             onClick={handleClose}
//           />
//         </DialogTitle>
//         <DialogContent style={{ backgroundColor: "#2A3E4C" }}>
//           <DialogContentText
//             style={{ color: "#C0C6CA" }}
//             id="alert-dialog-description"
//           >
//             Are you sure you want to delete these record[s]?
//           </DialogContentText>
//         </DialogContent>

//         <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
//           <Button onClick={handleClose} style={deleteTheme.but}>
//             Cancel
//           </Button>
//           <Button style={deleteTheme.but1} onClick={Delete}> Delete</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default Deleting;

import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
//import Table_data from "./axiosComponent";
import { useState } from "react";
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

// var data;
// export const Tempcomponent = (props) => {
//   data = props;
//   return props;
// };

let sl_no = localStorage.getItem("sl_no");

const Deleting = () => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const Delete = async (event) => {
    event.preventDefault();
    let data2 = "sl_no=" + sl_no;
    let response = await axios.get(
     `http://localhost:8080/WinterInternship/Delete?` + data2
    );
    return response.data2;
  };

  return (
    <>
      <Button
        id="delete"
        variant="outlined"
        size="medium"
        onClick={handleClickOpen}
      >
        Delete
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
          Delete Record(s)?
          <CloseIcon
            style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#2A3E4C" }}>
          <DialogContentText
            style={{ color: "#C0C6CA" }}
            id="alert-dialog-description"
          >
            Are you sure you want to delete these record[s]?
          </DialogContentText>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#2A3E4C" }}>
          <Button onClick={handleClose} style={deleteTheme.but}>
            Cancel
          </Button>
          <Button style={deleteTheme.but1} onClick={Delete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Deleting;