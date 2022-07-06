import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
// import { Cards, Chart, CountryPicker } from "./components";
import styles from "../src/App.module.css";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchedData(country);
    console.log("log", fetchedData);
    this.setState({ data: fetchData, country: country });
  };
  render() {
    const { data } = this.state;
    console.log("dasad", data);
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {/* <Chart /> */}
      </div>
    );
  }
}

export default App;
