import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import useStyles from "./styles/ColorPickerFormStyles";

export default function ColorPickerForm(props) {
  const {
    isPaletteFull,
    currColor,
    setColor,
    colorHandler,
    newName,
    addName,
    colors
  } = props;

  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", value => {
      return colors.every(({ color }) => color !== currColor);
    });
  });

  return (
    <div>
      <ChromePicker
        color={currColor}
        onChangeComplete={newColor => setColor(newColor.hex)}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={colorHandler} instantValidate={false}>
        <TextValidator
          placeholder="color name"
          className={classes.colorNameInput}
          value={newName}
          margin="normal"
          variant="filled"
          onChange={evt => addName(evt.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "that color name is already taken, try again",
            "that color is already taken, try another"
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: isPaletteFull ? "grey" : currColor }}
          type="submit"
          disabled={isPaletteFull}
          className={classes.addColor}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}
