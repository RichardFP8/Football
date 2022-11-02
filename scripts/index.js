"use strict";
let teams = [
    { code: "", name: "Select a Team" },
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];
let images = [
    { code: "DAL", id: "dallasCowboys" },
    { code: "DEN", id: "denverBroncos" },
    { code: "HOU", id: "houstonTexans" },
    { code: "KAN", id: "kcChiefs" }
];
window.onload = function () {
    //call the function that dropsdown the options in <select>
    showFootballTeams();
    //get the button to display information
    const submitForm = document.getElementById("theForm");
    submitForm.onsubmit = displayInfo;
    submitForm.onchange = hideOtherImages;

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
function displayInfo() {
    //get the <select> and the element to display
    const valueofTeams = document.getElementById("teamsList").value;
    const displayInfo = document.getElementById("displayInfo");

    //use the for loop to test each element in the teams array
    //test the value it has displayed; whichever it is, display the plays property
    let length = teams.length;
    for (let i = 0; i < length; i++) {

        if (teams[i].code == "") {
            displayInfo.innerHTML = "";
        }
        else if (teams[i].code == valueofTeams) {
            let getImage = images[i - 1].id;
            let showImage = document.getElementById(getImage);
            showImage.style.display = "block";
            displayInfo.innerHTML = "You selected " + teams[i].name + " who play in " + teams[i].plays;
        }


    }
    return false;
}
function hideOtherImages() {
    //The current value shouldn't get affected; all but it
    const getCurrentOption = document.getElementById("teamsList").value;
    
    let length = teams.length;
    
    //the browser is saying that there is an error, mulitple actually, that ".code" isn't read
    //yet it works... is the beginning to my success code that I don't understand why it worked?
    for (let i = 1; i <= length; i++) {
        if (teams[i].code != getCurrentOption) {
            let getImage = images[i - 1].id;
            let theImage = document.getElementById(getImage);
            const getMessage = document.getElementById("displayInfo");
            theImage.style.display = "none";
            getMessage.innerHTML = "" ;
        }
    }
}

 // const hello = document.getElementById("hello");
 // hello.innerHTML = "Hello";