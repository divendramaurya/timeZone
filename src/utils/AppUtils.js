import axios from "axios";

const corsObject = { crossdomain: true };

export const getSingleZone = async (value) => {
  const url = `http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${value}`;
  let result = await axios.get(url, corsObject);
  return result;
};

export const createSelect = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json`;
  let result = await axios.get(url, corsObject);
  return result;
};
