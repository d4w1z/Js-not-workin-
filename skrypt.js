/*
document.body.innerHTML += "<label for='imie'>Imie: </label> <input id='imie' type='text' requierd=''> <br> <br>";
document.body.innerHTML += "<label for='nazwisko'>Nazwisko: </label> <input id='nazwisko' type='text' requierd=''> <br> <br>";
document.body.innerHTML += "<label for='wiek'>Data urodzenia: </label> <input id='wiek' type='date' requierd=''> <br> <br>";
document.body.innerHTML += "<button type ='button' onclick='funkcja()'>Przycisk</button> <br> <br>";
document.body.innerHTML += '<div id="wypluwacz">tu pluje</div>';
*/
function guzik() {
    name = document.getElementById("name").value
    surname = document.getElementById("surname").value
    dob = document.getElementById("dob").value
    gender = document.getElementById("gender").value
    children = document.getElementById("children").value
    shoe_size = document.getElementById("shoe_size").value
    level = document.getElementById("level").value
    color = document.getElementById("color").value




    //regex regular expression
    rexTekst = /^[a-zA-Z]+$/.test(name);
    srexTekst = /^[a-zA-Z]+$/.test(surname);
    lrexNumber = /^[0-9]+$/.test(level);
    crexNumber = /^[0-9]+$/.test(children);
    srexNumber = /^[0-9]+$/.test(shoe_size);
    rexN =/^[0-9]+$/;
    

    var error;

    error = { name: 0, surname: 0, dob: 0, level: 0, shoe_size: 0, children: 0 }
    if (name.length < 3 || rexTekst == false) {
        error["name"] = 1;
    }

    if (surname.length < 3 || srexTekst == false) {
        error["surname"] = 1;
    }

    const startDate = new Date("1907-03-04");
    const endDate = new Date("2023-09-29");

    if (dob.value >= startDate && dob.value <= endDate) {
        error["dob"] = 1;
    }

    if (level.value < 0 || level.value > 50 || lrexNumber == false) {
        error["level"] = 1;
    }

    if (shoe_size.value < 14 || shoe_size.value > 51 || srexNumber == false) {
        error["shoe_size"] = 1;
    }

    if (children.value < 0 || crexNumber == false) {
        error["children"] = 1;
    }





    /*
        if(dob.length >= 1){
            error[0] += 0;
            error[1] += "dob";
        }
        else{
            error[0] += 1;
            error[1] += "dob";
    
        }
     
        
    */


    //console.log("rexNumber ", rexNumber)
    //console.log("rexTekst ", rexTekst)
    //console.log("rexTN ", rexTN)
    console.log(error)
}




// wypluwacz = document.getElementById("wypluwacz");
//wypluwacz.innerHTML= imie+"<br>"+nazwisko+"<br>"+wiek;