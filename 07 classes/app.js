class App
{
    runApplication()
    {
        console.log("hello world!");
        
    }
}

class Greet{
    constructor(){
        console.log("Greetings!")
    }
}

class GoodBye{
    constructor(){
        console.log("Bye Bye")
    }
}

let greet = new Greet()
greet = new Greet()
greet = new Greet()
greet = new Greet()
let bye = new GoodBye()

let app = new App();
app.runApplication();