import React, { useState } from "react";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import PaletteMetaForm from "./PaletteMetaForm";
import useStyles from "./styles/PaletteFormNavStyles";

export default function PaletteFormNav(props) {
  const { open, palettes, handleSubmit, setOpen } = props;

  const [formShowing, setFormShowing] = useState(false);
  const classes = useStyles();

  function handleDrawerOpen() {
    setOpen(true);
  }

  return (
    <div className={classes.root}>
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
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Add New Palette
          </Typography>
        </Toolbar>

        <div className={classes.navBtns}>
          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={() => props.history.push("/")}
          >
            Go Back
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={() => setFormShowing(true)}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          closeForm={() => setFormShowing(false)}
        />
      )}
    </div>
  );
}
