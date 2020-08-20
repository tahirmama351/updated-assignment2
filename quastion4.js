console.log("======Quastion 4==========")
/*
Input: 
  *Total number of students in the class.
  *number of team she want.
processing:
frist assign students on each tean equaly if some students lef 
add one more student rondomly on the team.
output:
  *number of students in a team.
*/
let prompt = require('prompt-sync')();
let totalNumberOfStudents = prompt("Enter number of studens in the class: ");
let numberOfTeam = prompt("Enter number of team you want: ");
let numberOfStudentsInTheTeam;
numberOfStudentsInTheTeam = Math.floor(totalNumberOfStudents/numberOfTeam);
let studentsNotAssignedYet;
studentsNotAssignedYet = totalNumberOfStudents % numberOfTeam;
let phrase = `${studentsNotAssignedYet} teams with 
${numberOfStudentsInTheTeam+ 1} members
${numberOfTeam - studentsNotAssignedYet} and teams with
${numberOfStudentsInTheTeam} members.`;
console.log(phrase);