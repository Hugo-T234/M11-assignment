//STEP 1
// let month = prompt("Enter a month").toLowerCase();
// let days = 0;
// switch(month) {
//     case 'january':
//         days = 31;
//         break;
//     case 'february':
//         days = 28;
//         break;
//      case 'march':
//         days = 31;
//         break;
//     case 'april':
//         days = 30;
//         break;
//     case 'may':
//         days = 31;
//         break;
//     case 'june':
//         days = 30;
//         break;
//     case 'july':
//         days = 31;
//         break;
//     case 'august':
//         days = 31;
//         break;
//     case 'september':
//         days = 30;
//         break;
//     case 'october':
//         days = 31;
//         break;
//     case 'november':
//         days = 30;
//         break;
//     case 'december':
//         days = 31;
//         break;
// }
// console.log(days);


//STEP 2
// let d = new Date();
// let month = d.getMonth();
// console.log(month);

// switch(month) {
//     case 0:
//         console.log('The month is january');
//         break;
//     case 1:
//         console.log('The month is february');
//         break;
//     case 2:
//         console.log('The month is march');
//         break;
//     case 3:
//         console.log('The month is april');
//         break;
//     case 4:
//         console.log('The month is may');
//         break;
//     case 5:
//         console.log('The month is june');
//         break;
//     case 6:
//         console.log('The month is july');
//         break;
//     case 7:
//         console.log('The month is august');
//         break;
//     case 8:
//         console.log('The month is september');
//         break;
//     case 9:
//         console.log('The month is october');
//         break;
//     case 10:
//         console.log('The month is november');
//         break;
//     case 11:
//         console.log('The month is december');
//         break;
// }

//STEP 3
// let d = new Date();
// let day = d.getDay();
// if (day == 0 || day == 6){
//     console.log("It's the weekend");
// }
// else console.log("It's not the weekend");

//STEP 4
// let d = new Date();
// let day = d.getDay();
// if (day != 0){
//     day -= 1;
// }
// else day = 6;
// switch(day){
//     case 0:
//         console.log('Yesterday was Sunday');
//         break;
//     case 1:
//         console.log('Yesterday was Monday');
//         break;
//     case 2:
//         console.log('Yesterday was Tuesday');
//         break;
//     case 3:
//         console.log('Yesterday was Wednesday');
//         break;
//     case 4:
//         console.log('Yesterday was Thursday');
//         break;
//     case 5:
//         console.log('Yesterday was Friday');
//         break;
//     case 6:
//         console.log('Yesterday was Saturday');
//         break;
// }

//STEP 5
// let d = new Date();
// let day = d.getDay();

// switch(day){
//     case 0:
//         console.log('S');
//         break;
//     case 1:
//         console.log('M');
//         break;
//     case 2:
//         console.log('T');
//         break;
//     case 3:
//         console.log('W');
//         break;
//     case 4:
//         console.log('T');
//         break;
//     case 5:
//         console.log('F');
//         break;
//     case 6:
//         console.log('S');
//         break;
// }