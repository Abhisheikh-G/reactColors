export default {
  root: {
    backgroundColor: "white",
    borderRadius: "3px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      transition: "all 0.3s ease-in-out",
      opacity: "1"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%;",
    borderRadius: "5px",
    overflow: "hidden"
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: "10",
    padding: "10px",
    opacity: "0"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColors: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};
