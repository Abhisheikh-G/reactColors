import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";
import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function NewPaletteForm(props) {
  const defaultProps = {
    maxColors: 20
  };
  const { palettes } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currColor, setColor] = useState("teal");
  const [colors, createColor] = useState(props.palettes[0].colors);
  const [newName, addName] = useState("");

  const colorHandler = () => {
    const newColor = { name: newName, color: currColor };
    createColor([...colors, newColor]);
    //Resets text field to empty
    addName("");
  };

  const deleteColor = colorName => {
    createColor(colors.filter(color => color.name !== colorName));
  };

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

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleSubmit(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push("/");
  }

  function clearColors() {
    createColor([]);
  }

  function addRandomColor() {
    //Picks a random color from existing palettes
    const allColors = props.palettes.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    createColor([...colors, randomColor]);
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    createColor(arrayMove(colors, oldIndex, newIndex));
  };

  const isPaletteFull = colors.length >= defaultProps.maxColors;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        palettes={palettes}
        open={open}
        setOpen={setOpen}
        classes={classes}
        handleSubmit={handleSubmit}
        history={props.history}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <Button variant="contained" color="secondary" onClick={clearColors}>
          Clear Palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={addRandomColor}
          disabled={isPaletteFull}
        >
          Random Color
        </Button>
        <ChromePicker
          color={currColor}
          onChangeComplete={newColor => setColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={colorHandler} instantValidate={false}>
          <TextValidator
            value={newName}
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
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          axis="xy"
          onSortEnd={onSortEnd}
          colors={colors}
          deleteColor={deleteColor}
        />
      </main>
    </div>
  );
}
