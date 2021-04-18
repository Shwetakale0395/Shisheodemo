import React, { Component } from "react";
import { OutlinedInput, InputAdornment } from "@material-ui/core/";
import "../App.css";
import Search from "@material-ui/icons/Search";

class Header extends Component {
  constructor(props) {
    super(props);
    this.onSerach = this.onSerach.bind(this);
  }
  onSerach(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="searchbox">
        <img
          src="https://www.shisheo.com/assets/front/images/logo.png"
          className="searchbox"
        />
        <OutlinedInput
          id="input-with-icon-adornment"
          type="search"
          placeholder="Search Restaurant"
          variant="outlined"
          onChange={this.onSerach}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </div>
    );
  }
}

export default Header;
