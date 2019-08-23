import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Constants";
import sizes from "./Sizes";
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
  hide: {
    display: "none"
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  btn: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: 0,
      padding: "0.3rem"
    }
  }
}));

export default useStyles;
