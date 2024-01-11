class App
{
    runApplication()
    {
        console.log("hello world!");
        let artists = ["Sabaton", "Pascal Michael Stiefel", "Amaranthe", "Beast in Black", "Powerwolf"]
        console.log(artists)
        this.LogArray(artists)

        artists.push("bob dylan")
        artists.push("prince")
        this.LogArray(artists)

        let indexToRemove = artists.indexOf("bob dylan")
        artists.splice(indexToRemove, 1)
        indexToRemove = artists.indexOf("prince")
        artists.splice(indexToRemove, 1)

        artists.push("XI")
        artists.push("Babymetal")
        this.LogArray(artists)

        let nummers = [2, 5, 7]
        this.LogArray(nummers)
    }

    LogArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(`${i + 1}: ${array[i]}`)            
        }
    }
}

let app = new App();
app.runApplication();