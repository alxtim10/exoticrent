
interface priceAction {
    hourly: number;
    hourlyOvertime: number;
    halfDay: number;
    daily: number;
    dailyOvertime: number;
}


export const calculatePrice = (value: number): priceAction => {

    let daily = value/500;
    let dailyOvertime = daily/2;
    let hourly = daily/10;
    let hourlyOvertime = hourly/1;
    let halfDay = daily/2;
    
    return {
        hourly,
        hourlyOvertime,
        halfDay,
        daily,
        dailyOvertime
    }
}