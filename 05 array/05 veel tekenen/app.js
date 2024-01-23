class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let c = canvas.getContext("2d");
        for (let i = 0; i < 200; i++) {
            let x = Math.floor(Math.random() * 1000)
            let y = Math.floor(Math.random() * 1000)
            let size = Math.floor(Math.random() * 30)
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            let color = `rgb(${r}, ${g}, ${b})`
            this.tekenCirkel(c, x, y, size, color)

        }
    }

    tekenCirkel(c, x, y, d, color){
        c.beginPath()
        c.fillStyle = color
        c.arc(x, y, d, 0, Math.PI * 2)
        c.stroke()
        c.fill()
        c.closePath()
    }
}

let app = new App();
app.runApplication();