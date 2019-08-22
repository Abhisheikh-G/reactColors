import React, { useState } from "react";
import clsx from "clsx";

import useStyles from "./styles/NewPaletteFormStyles";
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

  function handleSubmit(newPalette) {
    newPalette.id = newPalette.name.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;

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
