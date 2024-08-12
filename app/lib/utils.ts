import moment from "moment";

export const toDateTime = (datetimestring: string) => {
    let date = moment(datetimestring, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    
    let stillUtc = moment.utc(date).toDate();
    
    let local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm');

    return local;
}

export const toDate = (datetimestring: string) => {
    let date = moment(datetimestring, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    
    let stillUtc = moment.utc(date).toDate();
    
    let local = moment(stillUtc).local().format('DD/MM/YYYY');

    return local;
}

export const toTime = (datetimestring: string) => {
    let date = moment(datetimestring, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    
    let stillUtc = moment.utc(date).toDate();
    
    let local = moment(stillUtc).local().format('HH:mm');

    return local;
}

export const toStringTime = (timestring: string) => {
    if (!timestring) {
        return '';
    }

    let time = moment(timestring, 'HH:mm:ss');

    let hours = time.hour();
    let minutes = time.minutes();

    if (hours < 1) {
        return `${minutes} min`;
    }
    else {
        return `${hours}:${minutes.toString().padStart(2, '0')} h`;
    }
}