import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Papa from "papaparse";
import File from "./restaurants.csv";
import MapContainer from "./Component/MapContainer";
import RestaurantList from "./Component/RestaurantList";
import FooterNavigation from "./Component/FooterNavigation";
import Header from "./Component/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurantsBackup: [],
      search: "",
      filter: "",
      navValue: "home",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount = async () => {
    await Papa.parse(File, {
      download: true,
      header: true,
      complete: function (results) {
        results.data.pop();
        this.setState((state) => ({
          restaurants: results.data,
          restaurantsBackup: results.data,
        }));
      }.bind(this),
    });
  };

  onSearchChange(searchvalue) {
    this.filterList(searchvalue, this.state.filter);
  }

  filterList(search, filter) {
    var newList = [];
    const currentList = this.state.restaurantsBackup;
    if (search && filter) {
      newList = this.filter(search, "RestaurantName", currentList);
    } else if (search) {
      newList = this.filter(search, "RestaurantName", currentList);
    } else {
      newList = currentList;
    }
    this.setState({
      restaurants: newList,
      search: search,
      filter: filter,
    });
  }

  filter(text, field, list) {
    var newList = [];
    if (text) {
      newList = list.filter((item) => {
        const lc = item[field].toLowerCase();
        const filter = text.toLowerCase();
        return lc.includes(filter);
      });
      return newList;
    } else {
      return list;
    }
  }
  onNaviChange = (Value) => {
    this.setState({
      navValue: Value,
    });
  };
  render() {
    return (
      <div
        className={this.state.navValue == "home" ? "divcontainer" : "divmap"}
      >
        <Header onSearch={this.onSearchChange} />
        {this.state.navValue == "home" && (
          <RestaurantList restaurants={this.state.restaurants} />
        )}
        {this.state.navValue == "location" && (
          <MapContainer restaurants={this.state.restaurants} />
        )}
        <FooterNavigation onChange={this.onNaviChange} />
      </div>
    );
  }
}
