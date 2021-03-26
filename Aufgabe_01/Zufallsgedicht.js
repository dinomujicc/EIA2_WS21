"use strict";
//Wochenaufgabe in Zusammenarbeit mit Tim Nees
//Namespace sinnnvoll benennen
var Zufallsgedicht;
(function (Zufallsgedicht) {
    //Arrys mit Subjekten, Prädikaten und Objekten
    let subjekte = ["Iron Fist ", "Captain America ", "Doctor Strange ", "Spider-Man ", "Nightcralwer ", "Nova "];
    let praedikate = ["fights ", "teams up with ", "talks to ", "gets his ass kicked by ", "gets attacked by ", "follows "];
    let objekte = ["Kang the Conqueror", "Mysterio", "Fin Fang Foom", "Taskmaster", "Doctor Doom", "Stilt-Man"];
    //Schleife
    for (let a = 6; a > 0; a--) {
        let x = getVerse(subjekte, praedikate, objekte);
        console.log(x);
    }
    //Funktion 
    function getVerse(_subjekte, _praedikate, _objekte) {
        let value = "";
        let randomNumberSubjekt = Math.floor(Math.random() * Math.floor(_subjekte.length));
        let randomNumberPraedikat = Math.floor(Math.random() * Math.floor(_praedikate.length));
        let randomNumberObjekt = Math.floor(Math.random() * Math.floor(_objekte.length));
        value = _subjekte[randomNumberSubjekt] + _praedikate[randomNumberPraedikat] + _objekte[randomNumberObjekt];
        _subjekte.splice(randomNumberSubjekt, 1);
        _praedikate.splice(randomNumberPraedikat, 1);
        _objekte.splice(randomNumberObjekt, 1);
        return value;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=Zufallsgedicht.js.map