import moment from "moment"
import 'moment-timezone';

// interface ICurrentDate {
//     countryList: string
// }

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
        const minutes = moment.tz(date, timeZone[0]).minutes(); 
        const day = moment.tz(date, timeZone[0]).date();
        const mounth = moment.tz(date, timeZone[0]).month() + 1;
        const year = moment.tz(date, timeZone[0]).year();
        const dayInWeek = daysInWeek[dayForSearch];

        return { dayInWeek ,day, mounth, year, hours, minutes };
  
}