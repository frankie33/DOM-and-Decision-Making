let highSchoolGrade = 11;
let yourGrade;

switch(highSchoolGrade){
  case 9:
    yourGrade = "Freshman";
    break;
  case 10:
    yourGrade = "Sophomore";
    break;
  case 11:
    yourGrade = "Junior";
    break;
  case 12:
    yourGrade = "Senior";
    break;
    default:
    yourGrade = "Invalid";
}

console.log(yourGrade);

/*Create a program that checks highSchoolGrade to see if you are in 9, 10, 11 or 12:

    /if 9 assign "Freshman" to the yourGrade variable
    if 10 assign "Sophomore" to the yourGrade variable
    if 11 assign "Junior" to the yourGrade variable
    if 12 assign "Senior" to the yourGrade variable

Your default case should assign "Invalid" to yourGrade.*/