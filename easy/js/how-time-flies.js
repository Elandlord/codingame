let [beginDay, beginMonth, beginYear] = readline().split('.');
let [endDay, endMonth, endYear] = readline().split('.');

const begin = new Date(beginYear, beginMonth - 1, beginDay);
const end = new Date(endYear, endMonth - 1, endDay);

let diffTime = end.getTime() - begin.getTime();
let diffDays = diffTime / (1000 * 3600 * 24);

let formattedString = "";

let years = 0;

if (diffDays >= 365) {
    years = Math.round(diffDays / 365.25);
}

if (years === 1) formattedString += `${years} year`;
if (years > 1) formattedString += `${years} years`;

let months = (end.getFullYear() - begin.getFullYear()) * 12;
months -= begin.getMonth();
months += end.getMonth();
months = months <= 0 ? 0 : months;

if (months % 12 !== 0 && diffDays > 30) {
    if(formattedString !== "") formattedString += ", ";

    console.error(months % 12);

    if (months === 1) formattedString += `${months} month`;
    if (months > 1 && months < 12) formattedString += `${months} months`;
    if (months > 12) formattedString += `${months % 12} months`;
}

if(formattedString !== "") formattedString += ", ";

console.log(formattedString + `total ${diffDays} days`);

