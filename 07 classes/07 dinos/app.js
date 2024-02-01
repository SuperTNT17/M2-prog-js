class Dino
{
    leeft = true
    honger = true

    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
    }

    eatFood(foodToEat)
    {
        foodToEat.leeft = false
        this.honger = false
        console.log(`ik ben een ${this.naam}`)
        console.log(`mijn honger: ${this.honger}`)
    }
}

class App
{
    runApplication()
    {
        console.log("hello world!");

        let dino = new Dino("T-Rex", true, 20)
        let plantenEter = new Dino("Triceratops", false, 20)
        console.log(dino)
        console.log(plantenEter)

        console.log(`de leeftijd van deze ${dino.naam} is: ${dino.leeftijd}`)
        console.log(`en deze ${dino.naam} eet vlees: ${dino.vleeseter}`)

        dino.eatFood(plantenEter)
        console.log(`leeft ${plantenEter.naam}? ${plantenEter.leeft}`)
    }
}

let app = new App();
app.runApplication();