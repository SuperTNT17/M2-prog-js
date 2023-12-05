class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.moveTo(30, 10)
        g.fillStyle = "red"
        g.lineTo(70, 20)
        g.lineTo(60, 40)
        g.lineTo(20, 30)
        g.closePath()
        g.fill()
        g.stroke()

        let walls = canvas.getContext("2d")
        walls.beginPath()
        walls.fillStyle = "#CCCCCC"
        walls.lineTo(20, 50)
        walls.lineTo(60, 60)
        walls.lineTo(60, 40)
        walls.lineTo(20, 30)
        walls.closePath()
        walls.fill()
        walls.stroke()

        walls.beginPath()
        walls.fillStyle = "#999999"
        walls.moveTo(60, 40)
        walls.lineTo(70, 20)
        walls.lineTo(80, 30)
        walls.closePath()
        walls.fill()
        walls.stroke()

        walls.beginPath()
        walls.lineTo(60, 40)
        walls.lineTo(60, 60)
        walls.lineTo(80, 50)
        walls.lineTo(80, 30)
        walls.fill()
        walls.stroke()

        let raam = canvas.getContext("2d")
        raam.beginPath()
        if (Math.random() < 0.5)
        {
            raam.fillStyle = "#63C5F8"
        }
        else
        {
            raam.fillStyle = "#000000"
        }
        raam.moveTo(30, 40)
        raam.lineTo(50, 45)
        raam.lineTo(50, 50)
        raam.lineTo(30, 45)
        raam.closePath()
        raam.fill()
    }
}

let app = new App();
app.runApplication();