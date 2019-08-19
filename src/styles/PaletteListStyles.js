export default {
  root: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "Roboto"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",

    "& h1": {
      fontWeight: "300",
      fontSize: "2rem"
    },
    "& a": {
      textDecoration: "none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};
