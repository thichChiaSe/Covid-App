import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fechtData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url, { crossdomain: true });
    const modifiedData = {
      //   confirmed: data.confirmed,
      //   recovered: data.recovered,
      //   deaths: data.deaths,
      //   lastUpdate: data.lastUpdate,
    };
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://api.covidtracking.com/v1/us/daily.json"
//     );

//     return data.map(({ positive, recovered, death, dateChecked: date }) => ({
//       confirmed: positive,
//       recovered,
//       deaths: death,
//       date,
//     }));
//   } catch (error) {
//     return error;
//   }
// };
