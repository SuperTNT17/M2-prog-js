class App
{
    runApplication()
    {
        console.log("hello world!");
        let artists = ["Sabaton", "Pascal Michael Stiefel", "Amaranthe", "Beast in Black", "Powerwolf"]
        console.log(artists)

        for (let i = 0; i < artists.length; i++) {
            console.log(`${i + 1}: ${artists[i]}`)            
        }

        let nummers = [2, 5, 7]
        console.log(nummers)
        for (let i = 0; i < nummers.length; i++) {
            console.log(nummers[i] + 1)
        }
    }
}

let app = new App();
app.runApplication();