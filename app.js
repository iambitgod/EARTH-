const $climate =document.getElementById("climate");
const $consumption =document.getElementById("consumption");
const $resousrces =document.getElementById("resousrces");
const $people =document.getElementById("people");

$climate.onclick =() =>{
    document.body.style.background ="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundSize ='100% 100%';
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "2,911,343,321";
    document.getElementById("cause").innerHTML = "Tons of CO2 emitted in the atmosphere";
}
$consumption.onclick =() =>{
    document.body.style.background ="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize ='100% 100%';
    $consumption.style.backgroundColor = "#27ae60";
    $climate.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food wasted or thrown";
}
}
$resources.onclick =() =>{
    document.body.style.background ="url('https://i1.faceprep.in/prograd-junior/natural-resorces-bg.png')";
    document.body.style.backgroundSize ='100% 100%';
    $consumption.style.backgroundColor = "transparent";
    $climate.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "#27ae60";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food wasted or thrown";
}