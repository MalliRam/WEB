
let mark1 = Number(prompt("Enter marks for Subject 1:"));
let mark2 = Number(prompt("Enter marks for Subject 2:"));
let mark3 = Number(prompt("Enter marks for Subject 3:"));
let mark4 = Number(prompt("Enter marks for Subject 4:"));
let mark5 = Number(prompt("Enter marks for Subject 5:"));
let total = mark1 + mark2 + mark3 + mark4 + mark5;
let average = total / 5;
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 75) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}
console.log("Total Marks = " + total);
console.log("Average Percentage = " + average + "%");
console.log("Grade = " + grade);