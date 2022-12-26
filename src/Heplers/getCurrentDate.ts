import moment from "moment"
import 'moment-timezone';

export default function getCurrentDate(countryList: string) {
    const date = new Date();
    const dayForSearch = date.getDay();
     const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
     ];

        const timeZone = moment.tz.zonesForCountry(countryList);
        const hours = moment.tz(date, timeZone[0]).hours(); 
        const minutes = String(moment.tz(date, timeZone[0]).minutes()).padStart(2, "0");
        const day = moment.tz(date, timeZone[0]).date();
        const mounth = moment.tz(date, timeZone[0]).month() + 1;
        const year = moment.tz(date, timeZone[0]).year();
        const dayInWeek = daysInWeek[dayForSearch];

        return { dayInWeek ,day, mounth, year, hours, minutes };

}