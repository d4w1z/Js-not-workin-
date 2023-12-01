f = document.getElementById("form");
w = document.getElementById("wypluwacz");

/*
osoba = {
    imie: "Dawid",
    nazwisko: "Myszczuk",
    wiek: 18,
    zestawDane: function(){
        return "imię " + this.imie + "<br> nazwisko: " + this.nazwisko;

    }
};
console.log(osoba);
w.innerHTML = osoba.zestawDane()
*/


f.name.disable = true; //nie zadziała (działa na przyciskach)
f.name.addEventListener("change", function(e) {
    if(f.name.value.length > 3){
        f.name.style.color="red";
        f.name.style.backgroundColor="blue";
    } else{
        f.name.style.color="red";
        f.name.style.backgroundColor="yellow";
    }
});

function funkcja(){
    dane = f.name.name + " <br>"
    dane = f.name.value + " <br>"
}
w.innerHTML = "kop";
