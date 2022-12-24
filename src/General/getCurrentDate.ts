import moment from "moment"
import 'moment-timezone';

interface ICurrentDate {
    countryList: string[]
}

export default function getCurrentDate({countryList}:ICurrentDate) {
    const date = new Date();

    const dateForEveryCity = ["IT", "GB"].map((el) => {
        const timeZone = moment.tz.zonesForCountry(el);
        const hours = moment.tz(date, timeZone[0]).hours(); 
        const minutes = moment.tz(date, timeZone[0]).minutes(); 
        const day = moment.tz(date, timeZone[0]).date();
        const mounth = moment.tz(date, timeZone[0]).month() + 1;
        const year = moment.tz(date, timeZone[0]).year();

        return { day, mounth, year, hours, minutes };
    });
 
    return dateForEveryCity;
  
}