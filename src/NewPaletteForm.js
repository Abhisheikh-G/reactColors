import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
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
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btns: {
    width: "100%"
  },
  btn: {
    width: "50%"
  }
}));

export default function NewPaletteForm(props) {
  const maxColors = 20;

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

  const isPaletteFull = colors.length >= maxColors;

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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.btns}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.btn}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={isPaletteFull}
            >
              Random Color
            </Button>
          </div>

          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            currColor={currColor}
            setColor={setColor}
            colorHandler={colorHandler}
            newName={newName}
            addName={addName}
            colors={colors}
          />
        </div>
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
