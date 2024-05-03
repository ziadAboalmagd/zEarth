import axios from "axios";
import moment from "moment";

const countries = axios.create({
  baseURL: `http://api.weatherapi.com/v1/current.json?key=d87964faf02c401088e33357240205&q=`,
});

// get country timezone
export const gCountry = async (country: string) => {
  const response = await countries.post(country + "&aqi=no");
  // date and time
  const [date, time] = String(response.data.location.localtime).split(" ");
  // formated date
  const fdate = moment(date).format("dddd, D MMMM YYYY");
  // formated time
  const ftime = moment(time, "H:mm").format("HH:mm");
  // data
  const data = {
    time: ftime,
    date: fdate,
    cdegree: response.data.current.temp_c,
    weather: response.data.current.condition.text,
  };
  // console.log(data);
  return data;
};
