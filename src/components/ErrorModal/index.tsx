import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

import { useError } from "context/ErrorContext";

export default function ErrorModal() {
  const { error, removeError } = useError();

  return (
    <Dialog open={Boolean(error)} onClose={removeError}>
      <DialogTitle>There was a problem</DialogTitle>
      <DialogContent>
        {error?.message && (
          <DialogContentText>{error.message}</DialogContentText>
        )}
        <DialogContentText>
          Please refresh the page and try again. If this problem persists,
          please contact <a href="mailto:someone@mail.com">someone@mail.com</a>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={removeError}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
