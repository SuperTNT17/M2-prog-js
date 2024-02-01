class User
{
    constructor(name)
    {
        this.name = name
    }

    wieBenIk()
    {
        console.log(this.name)
    }
}

class App
{
    runApplication()
    {
        console.log("hello world!");
        let user1 = new User("user1")
        let user2 = new User("user2")
        let user3 = new User("user3")
        let user4 = new User("user4")
        let user5 = new User("user5")
        let user6 = new User("user6")

        user6.wieBenIk() //user6 (goed)
        user5.wieBenIk() //user5 (goed)
        user2.wieBenIk() //user2 (goed)
        user3.wieBenIk() //user3 (goed)
        user1.wieBenIk() //user1 (goed)
        user6.wieBenIk() //user6 (goed)
        user4.wieBenIk() //user4 (goed)
        user2.wieBenIk() //user2 (goed)
        user3.wieBenIk() //user3 (goed)
        user2.wieBenIk() //user2 (goed)
    }
}

let app = new App();
app.runApplication();