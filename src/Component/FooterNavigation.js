import React from "react";
import "../App.css";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
} from "@material-ui/core/";
import Home from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const styles = {
  root: {
    maxWidth: "100%",
    "&$selected": {
      color: "#32bfc9",
    },
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  selected: {},
};

class FooterNavigation extends React.Component {
  state = {
    value: "home",
  };
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.onChange(value);
  };
  render() {
    const actionClasses = this.props.classes;
    const { value } = this.state;
    return (
      <Paper zDepth={1} className={actionClasses.stickToBottom}>
        <BottomNavigation value={value} onChange={this.handleChange}>
          <BottomNavigationAction
            classes={actionClasses}
            value="home"
            icon={<Home />}
          />
          <BottomNavigationAction
            classes={actionClasses}
            value="location"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
export default withStyles(styles)(FooterNavigation);
