// Subject: Math
let myScore = 92;
const PASS_SCORE = 50;
const MAX_SCORE = 100;

if (myScore > PASS_SCORE) {
    console.log('You Passed!!');
} else {
    console.log('You Failed!!');
}

if (myScore > MAX_SCORE * 0.9) {
    console.log('You are top score!!');
}

console.log("==========================");

const points = 102;
if (points >= 80 && points <= 100) {
    console.log('A');
} else if (points >= 70 && points < 80) {
    console.log('B');
} else if (points >= 60 && points < 70) {
    console.log('C');
} else if (points >= 50 && points < 60) {
    console.log('D');
} else if (points >= 0 && points < 50) {
    console.log('F');
} else {
    console.log('Error');
}

console.log("==========================");
let month = 'February';
let season = '';
switch (month) {
    case 'January':
    case 'February':
    case 'March':
        season = 'Winter';
        break;
    case 'April':
    case 'May':
    case 'June':
        season = 'Spring';
        break;
    case 'July':
    case 'August':
    case 'September':
        season = 'Summer';
        break;
    case 'October':
    case 'November':
    case 'December':
        season = 'Autumn';
        break;
    default:
        season = 'Error';
}

console.log(season);