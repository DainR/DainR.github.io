const datetime = document.querySelector('.datetime');
const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const date = new Date();
let month = date.getUTCMonth() + 1;
let year = date.getUTCFullYear();

datetime.innerHTML = "(" + monthArray[month - 1] + ", " + year + ")";
