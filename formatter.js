function moment () {
    const monthsFull = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"];
    const monthsHalf = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDaysFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekDaysHalf = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    const hourPostfix = hours > 12 ? "PM" : "AM"  ;  
    const days = date.getUTCDate();
    const weekDay = date.getUTCDay();
    const dayPostfix = days == 1 ? 'st' : days == 2 ? "nd" : days == 3 ? "rd" : "th"; 
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const yearHalf = String(year).split("").splice(2, 4).join("");
    
    hours = hours > 12 ? hours % 12 : hours; // Setting hours in PM/AM Format
    
    this.format = function (a) {
        switch (a) {
            case undefined: // 2023-03-01T06:44:28.933Z
                return date; 

            case 'dddd': // Wednesday
                return weekDaysFull[weekDay];
            
            case 'MMM DD YY': //  Mar 1st 23
                return `${monthsHalf[month]} ${days}${dayPostfix} ${yearHalf}`

            case 'MM/DD/YYYY, h:mm:ss a': //  3/1/2023, 11:44:28 AM
                return date.toLocaleString();

            case 'MMMM DD YYYY, h:mm:ss a': //  March 1st 2023, 11:44:29 AM
                return `${monthsFull[month]} ${days}${dayPostfix} ${year}, ${hours > 9 ? hours : ("0" + hours) }:${minutes > 9 ? minutes : ("0"+minutes)}:${seconds > 9 ? seconds : ('0'+seconds)} ${hourPostfix}`
        
    
            // Locale
            case 'LT': //   8:09 AM
                return `${hours}:${minutes > 9 ? minutes : ('0'+minutes)} ${hourPostfix}`
            case 'LTS': //   8:09:05 AM 
                return `${hours}:${minutes > 9 ? minutes : ('0'+minutes)}:${seconds > 9 ? seconds : ('0'+seconds)} ${hourPostfix}`
            case 'L': //   03/01/2023
                return `${month + 1 > 9 ? month + 1 : ("0"+(month+1))}/${days > 9 ? days : ('0'+days)}/${year}`
            case 'LL': //   March 1, 2023 
                return `${monthsFull[month]} ${days}, ${year}`
            case 'LLL': //   March 1, 2023 8:14 AM
                return `${monthsFull[month]} ${days}, ${year} ${hours}:${minutes > 9 ? minutes : ('0'+minutes)  } ${hourPostfix}`
            case 'LLLL': //   Wednesday, March 1, 2023 8:22 AM
                return `${weekDaysFull[weekDay]}, ${monthsFull[month]} ${days}, ${year} ${hours}:${minutes > 9 ? minutes : ('0'+minutes)  } ${hourPostfix}`
            case 'l': //   3/1/2023  
                return `${month + 1}/${days}/${year}`
            case 'll': //   Mar 1, 2023
                return `${monthsHalf[month]} ${days}, ${year}`
            case 'lll': //   Mar 1, 2023 8:22 AM
                return `${monthsHalf[month]} ${days}, ${year} ${hours}:${minutes > 9 ? minutes : ('0'+minutes)  } ${hourPostfix}`
            case 'llll': //   Wed, Mar 1, 2023 8:22 AM 
                return `${weekDaysHalf[weekDay]}, ${monthsHalf[month]} ${days}, ${year} ${hours}:${minutes > 9 ? minutes : ('0'+minutes)  } ${hourPostfix}`
        }
    }
}


// Done
// console.log( new moment().format()); //1
// console.log(new moment().format('dddd')); //2
// console.log( new moment().format("MM/DD/YYYY")); //3
// console.log( new moment().format("MMM DD YY")); //4
// console.log( new moment().format("MM/DD/YYYY, h:mm:ss a")); //5
// console.log( new moment().format("MMMM DD YYYY, h:mm:ss a")); //6

// Locale
// console.log( new moment().format("LT"), 'LT'); 
// console.log( new moment().format("LTS"), "LTS"); 
// console.log( new moment().format("L"), 'L'); 
// console.log( new moment().format("l"), 'l'); 
// console.log( new moment().format("LL"), 'LL'); 
// console.log( new moment().format("ll"), 'll'); 
// console.log( new moment().format("LLL"), 'LLL'); 
// console.log( new moment().format("lll"), "lll"); 
// console.log( new moment().format("LLLL"), "LLLL"); 
// console.log( new moment().format("llll"), 'llll'); 



