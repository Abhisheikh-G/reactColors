import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function PaletteFormNav(props) {
  const [newPaletteName, addNewPaletteName] = useState("");

  const { classes, open, palettes, handleSubmit, setOpen } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  function handleDrawerOpen() {
    setOpen(true);
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Add New Palette
          </Typography>
          <ValidatorForm
            onSubmit={() => handleSubmit(newPaletteName)}
            instantValidate={false}
          >
            <TextValidator
              label="Palette Name"
              onChange={evt => addNewPaletteName(evt.target.value)}
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "That name is already taken"
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => props.history.push("/")}
            >
              Go Back
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>{" "}
    </div>
  );
}
