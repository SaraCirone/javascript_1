document.getElementById('titolo').innerHTML = "Prova Javascript!"; /*scrive il titolo in h1*/

function addizione(){
    var x = document.getElementById('numberOneAdd').value;
    var y = document.getElementById('numberTwoAdd').value;

    document.getElementById('risultato').innerHTML = Number(x) + Number(y);
}

function sottrazione(){
    var x = document.getElementById('numberOneSott').value;
    var y = document.getElementById('numberTwoSott').value;

    document.getElementById('risultato2').innerHTML = Number(x) - Number(y);
}