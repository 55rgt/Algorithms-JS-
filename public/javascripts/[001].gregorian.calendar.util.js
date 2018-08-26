/**
 * @param startDate
 * startDate formula : {year: number, month: number, day: number}
 * @param endDate
 * endDate formula : {year: number, month: number, day: number}
 *
 * e.g) (dateDuration({ year: 2018, month: 12, day: 4 },{ year: 2018, month: 12, day: 4 }); yields 0.
 */
const dateDuration = (startDate, endDate) => {


    if(startDate.year <= 0 || endDate.year <= 0){
        console.log('Inappropriate year. Abort Program');
        return;
    }
    else if(startDate.month <= 0 || startDate.month > 12 || endDate.month <= 0 || endDate.month > 12){
        console.log('Inappropriate month. Abort Program');
        return;
    }
    else if(startDate.day <= 0 || startDate.day > 31 || endDate.day <= 0 || endDate.day > 31){
        console.log('Inappropriate day. Abort Program');
        return;
    }
    if(startDate.year < 1583 || endDate.year < 1583)
        console.log('The year is before Gregorian. So the return value may contain conditional error.');


    let leap;
    let dayPassed = 0;
    let monthState = {
        1: 31,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    for (let yr = startDate.year; yr < endDate.year; yr++) {
        leap = (yr % 400 === 0 ? 1 : yr % 100 === 0 ? 0 : yr % 4 === 0 ? 1 : 0);
        monthState[2] = 28 + leap;
        dayPassed += 365 + leap;
    }
    for (let mt = 1; mt < startDate.month; mt++)
        dayPassed -= (mt !== 2 ? monthState[mt] : 28 + (startDate.year % 400 === 0 ? 1 : startDate.year % 100 === 0 ? 0 : startDate.year % 4 === 0 ? 1 : 0));
    for (let d = 1; d <= startDate.day; d++) dayPassed--;
    for (let mt = 1; mt < endDate.month; mt++)
        dayPassed += (mt !== 2 ? monthState[mt] : 28 + (endDate.year % 400 === 0 ? 1 : endDate.year % 100 === 0 ? 0 : endDate.year % 4 === 0 ? 1 : 0));
    for (let d = 1; d <= endDate.day; d++) dayPassed++;
    return dayPassed;

};

const getDay = (date) => {

    const dayState = {
        0: 'SAT',
        1: 'SUN',
        2: 'MON',
        3: 'TUE',
        4: 'WED',
        5: 'THU',
        6: 'FRI'
    };

    return dayState[dateDuration({
        year: 1583,
        month: 1,
        day: 1
    }, {
        year: date.year,
        month: date.month,
        day: date.day
    }) % 7];
};

console.log(dateDuration({
    year: 1583,
    month: 1,
    day: 1
}, {
    year: 2000,
    month: 3,
    day: 1
}));

