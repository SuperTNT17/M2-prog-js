class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
    }
}

class App
{
    runApplication()
    {
        console.log("hello world!");

        let dino = new Dino("T-Rex", true, 20)
        console.log(dino)

        console.log(`de leeftijd van deze ${dino.naam} is: ${dino.leeftijd}`)
        console.log(`en deze ${dino.naam} eet vlees: ${dino.vleeseter}`)
    }
}

let app = new App();
app.runApplication();