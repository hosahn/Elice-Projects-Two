import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function Alert({ isOpen, title, message, handleAlertClose }) {
  return (
    <>
      {isOpen !== undefined && (
        <Dialog open={isOpen} onClose={handleAlertClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertClose}>OK</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
