// getElementById()
let name = document.getElementById("studentName");
name.innerText = "Ravi Kumar";


// getElementsByClassName()
let info = document.getElementsByClassName("info");
info[1].innerText = "Department: Information Technology";


// getElementsByTagName()
let skills = document.getElementsByTagName("li");
skills[2].innerText = "Python";


// querySelector() with ID
let description = document.querySelector("#description");
description.innerText = "I am learning DOM manipulation.";


// querySelector() with class
let firstSkill = document.querySelector(".skill");
firstSkill.innerText = "HTML5";


// querySelector() with tag
let heading = document.querySelector("h2");
heading.innerText = "Technical Skills";


// querySelectorAll()
let allSkills = document.querySelectorAll(".skill");
allSkills[1].innerText = "Bootstrap";


// innerText
name.innerText = "Atul Das";


// textContent
description.textContent = "I am interested in web development.";


// innerHTML
let result = document.getElementById("result");

result.innerHTML = `
<h3>Student Details</h3>
<p>Name: Atul Das</p>
<p>Course: MTECH</p>
<p>Department: Information Technology</p>
`;