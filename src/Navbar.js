import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: true };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format, open } = this.state;
    const key = 0;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">colors</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                step={100}
                max={900}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff </MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={<span id="message-id">Format set to {format}</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          action={[
            <IconButton key={key + 1} onClick={this.closeSnackbar}>
              <CloseIcon color="inherit" key="close" aria-label="close" />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
