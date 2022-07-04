import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fechtData = async () => {
  try {
    const res = await axios.get(url);
    console.log("dasda", res);
    return res;
  } catch (error) {}
};
