"use strict";
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];
window.onload = function () {
    //call the function that dropsdown the options in <select>
    showFootballTeams();
    //get the button to display information
    const infoBtn = document.getElementById("forTeamInfo");
    infoBtn.onclick = displayInfo;
}
function showFootballTeams() {
    const teamsList = document.getElementById("teamsList");
    let length = teams.length;

    for (let i = 0; i < length; i++) {

        //creating <option> as many as the array's length in teams: 4
        let createOption = document.createElement("option");

        //adding information to each of the <option>, based on the element in array
        createOption = new Option(teams[i].name, teams[i].code);

        //send it to the <select> and add it as a child
        teamsList.appendChild(createOption);
    }
}
function displayInfo(){
    //get the <select> and the element to display
    const valueofTeams = document.getElementById("teamsList").value; 
    const displayInfo = document.getElementById("displayInfo");
    //use the for loop to test each element in the teams array
    //test the value it has displayed; whichever it is, display the plays property
    let length = teams.length;
    for(let i = 0; i < length;i++){
        if(teams[i].code == valueofTeams){
            displayInfo.innerHTML = teams[i].name + " play in " + teams[i].plays;
        }
    }

   
}