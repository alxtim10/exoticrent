
interface priceAction {
    hourly: number;
    hourlyOvertime: number;
    halfDay: number;
    daily: number;
    dailyOvertime: number;
}


export const calculatePrice = (value: number): priceAction => {

    let hourly = value/500;
    let hourlyOvertime = (value/500)/2;
    let halfDay = (value*2.1)/100;
    let daily = (value*3.6)/100;
    let dailyOvertime = (value*0.25)/100;
    
    return {
        hourly,
        hourlyOvertime,
        halfDay,
        daily,
        dailyOvertime
    }
}