import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Color Picker</h1>
        <MiniPalette />
        {palettes.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}