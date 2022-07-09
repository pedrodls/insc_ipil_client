
import moment from 'moment';

export class ConvertDate {

    result: any;

    constructor() {

    }

    convert(date: any): any {

        let days = moment(new Date()).diff(moment(date), 'days')

        let months = moment(new Date()).diff(moment(date), 'months')

        let years = moment(new Date()).diff(moment(date), 'years')

        if (years > 0)
            this.result = years > 1 ? years + ' anos ' : years == 0 ? years + ' anos ' : years + ' ano '

        else if (months <= 12 && years < 1)
            this.result = (months > 1 ? months + ' meses ' : months == 0 ? months + ' meses ' : months + ' mes ')
        else
            this.result = 'e ' + (days > 1 ? days + ' dias ' : days == 0 ? days + ' dias ' : days + ' dia ')

        return this.result

    }

}

export class ConvertDateIntoYears {

    constructor() {

    }

    convert(date: any): any {

        let years = moment(new Date()).diff(moment(date), 'years')

        return years;
    }

}


