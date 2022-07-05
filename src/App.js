import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
// import { Cards, Chart, CountryPicker } from "./components";
import styles from "../src/App.module.css";
import { fechtData } from "./api";
class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fecthData = await fechtData();
    this.setState({ data: fecthData });
  }
  render() {
    const { data } = this.state;
    // console.log("dasad", data);
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
