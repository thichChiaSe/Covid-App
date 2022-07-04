import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
// import { Cards, Chart, CountryPicker } from "./components";
import styles from "../src/App.module.css";
import { fechtData } from "./api";
class App extends React.Component {
  async componentDidMount() {
    const data = await fechtData();
    console.log("dasda", data);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
