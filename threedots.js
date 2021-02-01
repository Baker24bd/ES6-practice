
const ages = [12, 15, 16, 18, 20];
const ages2 = [25, 20, 21, 23];
const ages3 = [35, 30, 31, 33];
const allAges = ages.concat(ages2).concat(ages3).concat([50]);
// 3 ta dod ... diye ektar bitore kaj gulu kora jay
const allAges2 = [...ages, ...ages2, ...ages3, 5]
console.log(allAges2);

// maximum value bahir korar puran poddoti
const business = 650;
const minstar = 550;
const shochib = 450;
const maximum = Math.max(business, minstar, shochib);
console.log(maximum);

//  maximum value bahir korar 3dod... poddoti
// const business = 650;
// const minstar = 550;
// const shochib = 450;
const takaPoisha = [100, 500, 200, 700, 300, 600, 250]
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);