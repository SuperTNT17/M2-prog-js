class App {
    runApplication() {
        console.log("hello world!");

    }
}

class Greet {
    constructor() {
        this.greeting = "Greetings!"
    }

    showGreeting() {
        console.log(`greeting van binnen: ${this.greeting}`)
    }
}

class GoodBye {
    constructor() {
        this.farewell = "Bye bye"
    }

    showBye() {
        console.log(`Bye Bye van buiten: ${this.farewell}`)
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

console.log(`greeting van buiten: ${greet.greeting}`)

let app = new App();
app.runApplication();