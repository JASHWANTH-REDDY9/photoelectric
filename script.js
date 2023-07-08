const canva = document.getElementById("myCanvas");
const ctx = canva.getContext("2d");
window.onload = function(){
const img = document.getElementById("peeimg");
ctx.drawImage(img,50,10,600,500);
}

//Make the input type to select menu 
function voltage(){
    document.getElementById("Voltage").select();
}

//changes the colour of the text in the Voltage reading
function change(){
    reading = document.getElementById("Voltage").value;
    read = document.getElementById("select").value;
    if (read === "Red"){
        if (reading === "0.13") {
            document.getElementById("Voltage").style.color = "#008000";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Green"){
        if (reading === "0.43") {
            document.getElementById("Voltage").style.color = "#008000";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Orange"){
        if (reading === "0.42") {
            document.getElementById("Voltage").style.color = "#008000";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }else if (read === "Blue"){
        if (reading === "0.68") {
            document.getElementById("Voltage").style.color = "#008000";
        }
        else { document.getElementById("Voltage").style.color = "black"; }
    }
}

//draws white layer
function white() {
    const white = document.getElementById("white");
    ctx.drawImage(white,470,365,50,50);
}
//Clear the canvas
function clear() {
    ctx.clearRect(0, 0, canva.width, canva.height);
}

//Changed the colour of light

function lighton() {
    if (output === "Red"){
    let redimg = document.getElementById("redimg");
    ctx.drawImage(redimg, 50, 10, 600, 500);
    } else if (output === "Blue"){
        let blueimg = document.getElementById("blueimg");
        ctx.drawImage(blueimg, 50, 10, 600, 500);
    } else if (output === "Green"){
        let greenimg = document.getElementById("greenimg");
        ctx.drawImage(greenimg, 50, 10, 600, 500);
    } else if (output === "Orange"){
        let orangeimg = document.getElementById("orangeimg");
        ctx.drawImage(orangeimg, 50, 10, 600, 500);
    }else if ( output === "None"){
        const img = document.getElementById("peeimg");
        ctx.drawImage(img, 50, 10, 600, 500);
    }
}

//Get the colour from the selected option
function getOption() {
    selectElement = document.querySelector('#select');
    output = selectElement.value;
    lighton();
}
//Function called when turnoff button is clicked
function lightoff(){
    clear();
    const img = document.getElementById("peeimg");
    ctx.drawImage(img, 50, 10, 600, 500);
}

//Gets the voltmeter reading when voltage is changed in the range input
function voltage(){
let volt = document.getElementById("spanvolt").value;
document.getElementById("voltvalue").innerHTML = volt/10;
let current = document.getElementById("voltvalue").innerHTML * 4;
document.getElementById("curr2").value = current+"mA";
}

//changes the graph
function graph() {
    let colour = document.querySelector("#select").value;
    if (colour === "Red"){
        document.getElementById("graph").src = "tabs/images/graph_red.png";
    }else if (colour === "Green") {
        document.getElementById("graph").src = "tabs/images/graph_green.png";
    }else if (colour==="Blue") {
        document.getElementById("graph").src = "tabs/images/graph_blue.png";;
    }else if (colour==="Orange") {
        document.getElementById("graph").src = "tabs/images/graph_orange.png";
    }else if (colour === "Allcolour"){
        document.getElementById("graph").src = "tabs/images/graph2.png";
    }
}

//bring back the normal graph when lightoff button is pressed
function normalgraph() {
    document.getElementById("graph").src = "tabs/images/graph2.png";
}

//for appearing of values in table
function callingvalues(){
    x = document.querySelector("#select").value;
    if (x === "Red") {
        redvalue();
    }else if (x === "Green"){
        greenvalue();
    }else if (x === "Orange"){
        orangevalue();
    }else if (x === "Blue"){
        bluevalue();
    }
}

function testing(){
    read = document.getElementById("Voltage").value;
    console.log(read);
    x = document.querySelector("#spr").value;
    console.log(x);
}

function redvalue() {
    readin = document.getElementById("Voltage").value;
    if (readin === "0.13"){
        document.getElementById("spr").innerHTML = "0.134";
    }    
}
function orangevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.42") {
        document.getElementById("spo").innerHTML = "0.424";
    }
}
function greenvalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.43") {
        document.getElementById("spg").innerHTML = "0.438";
    }
}
function bluevalue(){
    readin = document.getElementById("Voltage").value;
    if (readin === "0.68") {
        bluesp = document.getElementById("spb").innerHTML = "0.680";
    }
}