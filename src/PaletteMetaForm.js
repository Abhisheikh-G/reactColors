import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function PaletteMetaForm(props) {
  const [newPaletteName, addNewPaletteName] = useState("");
  const { handleSubmit, palettes, closeForm } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  return (
    <div>
      <Dialog
        open={closeForm}
        onClose={closeForm}
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
            <Picker />
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
            <Button onClick={closeForm} color="primary">
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
