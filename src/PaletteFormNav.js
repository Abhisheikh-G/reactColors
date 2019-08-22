import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  navBtns: {
    marginRight: "1rem"
  },
  btn: {
    margin: "0 0.5rem"
  }
}));

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
            <MenuIcon />
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
