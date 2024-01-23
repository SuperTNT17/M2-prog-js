class App
{
    runApplication()
    {
        let headers = document.getElementsByTagName("h1")
        this.LogArray(headers)

        let headersByCssClass = document.getElementsByClassName("bandName")
        this.LogArray(headersByCssClass)
        for (let i = 0; i < headersByCssClass.length; i++) {
            console.log(headersByCssClass[i].innerHTML)
            headersByCssClass[i].innerHTML = "huh?"
        }

        headersByCssClass[0].innerHTML = "nieuws"
        headersByCssClass[1].innerHTML = "reviews"
        headersByCssClass[2].innerHTML = "commentaar"
        headersByCssClass[3].innerHTML = "beste forum posts"
        headersByCssClass[4].innerHTML = "pricewatch"

        let data = [headersByCssClass[0].innerHTML, headersByCssClass[1].innerHTML, headersByCssClass[2].innerHTML, headersByCssClass[3].innerHTML, headersByCssClass[4].innerHTML]
        for (let i = 0; i < data.length; i++) {
            headersByCssClass[i].innerHTML = `${i}: ${data[i]}`
        }

        console.log("hello world!");
        let artists = ["Sabaton", "Pascal Michael Stiefel", "Amaranthe", "Beast in Black", "Powerwolf"]
        console.log(artists)
        this.LogArrayWithNumbers(artists)

        artists.push("bob dylan")
        artists.push("prince")
        this.LogArrayWithNumbers(artists)

        let indexToRemove = artists.indexOf("bob dylan")
        artists.splice(indexToRemove, 1)
        indexToRemove = artists.indexOf("prince")
        artists.splice(indexToRemove, 1)

        artists.push("XI")
        artists.push("Babymetal")
        this.LogArrayWithNumbers(artists)

        let nummers = [2, 5, 7]
        this.LogArrayWithNumbers(nummers)
    }

    LogArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }

    LogArrayWithNumbers(array){
        for (let i = 0; i < array.length; i++) {
            console.log(`${i + 1}: ${array[i]}`)            
        }
    }
}

let app = new App();
app.runApplication();