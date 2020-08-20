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

let team_with_low_members = `${numberOfTeam - studentsNotAssignedYet}  teams each with ${numberOfStudentsInTheTeam} members`
let team_with_high_members= `${studentsNotAssignedYet} teams each with ${numberOfStudentsInTheTeam + 1} members.`;
if (studentsNotAssignedYet ===0){
console.log(team_with_low_members)

}else{
console.log(team_with_low_members + " and " + team_with_high_members )
}
