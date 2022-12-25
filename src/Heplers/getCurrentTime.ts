import { IItems } from "../redux/weather/weatSlice";


export default function getCurrentTime(item: IItems[]) {
    const dateNow = new Date();
  const itemsForUpdate: number[] = [];
  item.forEach((element, inx) => {
    console.log("Stack current time")
    const getYearBeforeCreated = new Date(element.dtCreated).getFullYear();
    
        const getYear = dateNow.getFullYear() - getYearBeforeCreated;
  
    if (getYear > 0) {
          itemsForUpdate.push(inx);
          return;
        }
    
        const getMounthBeforeCreated = new Date(element.dtCreated).getMonth();
        const getMonth = dateNow.getMonth() - getMounthBeforeCreated;

    if (getMonth > 0) {
          itemsForUpdate.push(inx);
          return;
        }
    
        const getDaysBeforeCreated = new Date(element.dtCreated).getDate();
        const getDays = dateNow.getDate() - getDaysBeforeCreated;

    if (getDays > 0) {
          itemsForUpdate.push(inx);
          return;
        }
    
        const getHoursBeforeCreated = new Date(element.dtCreated).getHours();
        const getHours = dateNow.getHours() - getHoursBeforeCreated;

        if (getHours > 0) {
          itemsForUpdate.push(inx);
          return;
        }

        const getMinutesBeforeCreated = new Date(element.dtCreated).getMinutes();
        const getMinutes = dateNow.getMinutes() - getMinutesBeforeCreated;
        

    if (getMinutes > 0) {
          itemsForUpdate.push(inx);
          return;
        }
    
  });
  
    return itemsForUpdate;
}