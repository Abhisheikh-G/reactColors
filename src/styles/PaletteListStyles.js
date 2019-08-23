import sizes from "./Sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "Roboto",
    /* Background By SVGBackgrounds.com */
    backgroundColor: "#6ee0ff",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
    backgroundSize: "cover"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",

    "& h1": {
      fontWeight: "300",
      fontSize: "2rem",
      [sizes.down("md")]: {
        fontSize: "1.8rem"
      },
      [sizes.down("xs")]: {
        fontSize: "1.5rem"
      }
    },
    "& a": {
      textDecoration: "none",
      color: "black",
      margin: "1rem",
      fontSize: "1rem",
      [sizes.down("sm")]: {
        fontSize: ".8rem",
        margin: ".8rem"
      },
      [sizes.down("xs")]: {
        display: "block"
      }
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};
