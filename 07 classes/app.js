class App {
    runApplication() {
        console.log("hello world!");

    }
}

class Greet {
    constructor() {
    }

    showGreeting() {
        console.log("Greetings!")
    }
}

class GoodBye {
    constructor() {
    }

    showBye() {
        console.log("Bye Bye")
    }
}

let greet = new Greet()
greet.showGreeting()

let bye = new GoodBye()
bye.showBye()

greet.showGreeting()
bye.showBye()

greet.showGreeting()
bye.showBye()

greet.showGreeting()
bye.showBye()

let app = new App();
app.runApplication();