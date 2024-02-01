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
        console.log(`ik eet nu ${foodToEat.naam}`)
        console.log(`mijn honger: ${this.honger}`)
    }
}

class Plant
{
    leeft = true

    constructor(naam)
    {
        this.naam = naam
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
        
        let gras = new Plant("gras")
        let struik = new Plant("struik")
        
        plantenEter.eatFood(gras)
        plantenEter.eatFood(struik)
        
        dino.eatFood(plantenEter)
        console.log(`leeft ${plantenEter.naam}? ${plantenEter.leeft}`)

        console.log(`de leeftijd van deze ${dino.naam} is: ${dino.leeftijd}`)
        console.log(`en deze ${dino.naam} eet vlees: ${dino.vleeseter}`)
    }
}

let app = new App();
app.runApplication();