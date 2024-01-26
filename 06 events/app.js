class App {
    runApplication() {
        console.log("hello world!");
        let uiButton = document.getElementById("myButton")
        uiButton.addEventListener("click", (e) => {
            const para = document.createElement("p")
            const node = document.createTextNode("This is new.")
            para.appendChild(node)
            document.body.appendChild(para)
        })

        let newButton = document.getElementById("newButton")
        newButton.addEventListener("click", (e) => {
            const header = document.createElement("h1")
            const node = document.createTextNode("Dit is de header")
            header.appendChild(node)
            document.body.appendChild(header)

            const para = document.createElement("p")
            const node2 = document.createTextNode("Nog een paragraph")
            para.appendChild(node2)
            document.body.appendChild(para)

            const img = document.createElement("img")
            img.src = "https://github.com/progsen/jsopdrachtM2/raw/main/06%20events/img/result2.PNG"
            document.body.appendChild(img)
        })

        let clickableDiv = document.getElementById("clickableDiv")
        clickableDiv.addEventListener("click", (e) => {
            const header = document.createElement("h1")
            const node = document.createTextNode("clicked a div")
            header.appendChild(node)
            document.body.appendChild(header)
            if (clickableDiv.style.backgroundColor == "red") {
                clickableDiv.style.backgroundColor = "green"
            }
            else {
                clickableDiv.style.backgroundColor = "red"
            }
        })

        let knopmaker = document.getElementById("knopmaker")
        knopmaker.addEventListener("click", (e) => {
            const newButton = document.createElement("input")
            newButton.setAttribute("type", "button")
            newButton.setAttribute("value", "button")
            newButton.setAttribute("class", "newButton")
            document.body.appendChild(newButton)
        })
    }
}

let app = new App();
app.runApplication();