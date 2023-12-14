function heeftEenResultaat() {
    let resultaat = 1
    return resultaat
}

let hetResultaat = heeftEenResultaat()
console.log(hetResultaat)
console.log(heeftEenResultaat())

function argumentsAreHandy(shoutout) {
    console.log("do you want to give a shoutout?")
    console.log(shoutout)
}

function ax2bcWiskunde(x, a, b, c) {
    let y = (a * (x * x)) + (b * x) + c
    return y
}

let y1 = ax2bcWiskunde(9, 3, 4, 89)
console.log(y1)

let y2 = ax2bcWiskunde(3, 6, 5, 45)
console.log(y2)

let y3 = ax2bcWiskunde(7, 1, 2, 13)
console.log(y3)

function jaidkWatDitIs(u, h, l) {
    let logY = Math.log(l) + h + Math.pow(u, 2)
    console.log(logY)
}

jaidkWatDitIs(9, 8, 15)

argumentsAreHandy("Super shout out")
argumentsAreHandy("iets anders")
argumentsAreHandy("ja dit is tekst")

function superMooieGlobalFunction() {
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")
}
superMooieGlobalFunction()
superMooieGlobalFunction()
superMooieGlobalFunction()

class App {
    runApplication() {
        console.log("hello world!")
        superMooieGlobalFunction()
    }

    newClassFunction() {
        console.log("hello world in de nieuwClassFunction")
    }

    anotherFunctionWithArguments(aArgument) {
        console.log("kom maar met je argument")
        console.log("hier:")
        console.log(aArgument)
    }

    mario(){
        console.log("MARIO!!")
    }

    bwahaha(){
        return "BWAHAHA!!!"
    }

    optellen(getal1, getal2){
        return getal1 + getal2
    }

    aftrekken(getal1, getal2){
        return getal1 - getal2
    }
}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
app.mario()
let bwahaha = app.bwahaha()
console.log(bwahaha)
let optellenResultaat = app.optellen(1, 2)
console.log(optellenResultaat)
let aftrekkenResultaat = app.aftrekken(10, 5)
console.log(aftrekkenResultaat)