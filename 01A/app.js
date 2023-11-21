class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = "app"
        let versienummer = 1.0
        let versiedatum = new Date("2023-11-21")
        let autheur = "Robin"
        let copyright = "niet stelen"
        let distributeur = "-"
        let darkmode = false

        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();