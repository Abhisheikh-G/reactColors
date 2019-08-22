import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function PaletteMetaForm(props) {
  const [open, setOpen] = React.useState(false);
  const [newPaletteName, addNewPaletteName] = useState("");
  const { handleSubmit, palettes, formOpen } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });

    setOpen(formOpen);
  });

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Palette Name</DialogTitle>
        <ValidatorForm
          onSubmit={() => handleSubmit(newPaletteName)}
          instantValidate={false}
        >
          <DialogContent>
            <DialogContentText>
              Please enter a name for the new palette. (All names must be
              unique)
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              fullWidth
              margin="normal"
              onChange={evt => addNewPaletteName(evt.target.value)}
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "That name is already taken"
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
