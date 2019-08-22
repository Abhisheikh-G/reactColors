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
  const [stage, setStage] = useState("form");
  const { handleSubmit, palettes, closeForm } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = emoji => {
    handleSubmit({ paletteName: newPaletteName, emoji: emoji.native });
  };

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={closeForm}>
        <DialogTitle id="form-dialog-title">Pick A Palette Emoji</DialogTitle>
        <Picker title="Select Emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker} instantValidate={false}>
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
