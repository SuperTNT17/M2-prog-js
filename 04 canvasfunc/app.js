class App {
    runApplication() {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        this.tekenHuis(g, 10, 10)
        this.tekenHuis(g, 75, 50)
        this.tekenHuis(g, 120, 120)
        this.tekenKerstboom(g, 300, 300)
    }

    tekenHuis(g, x, y) {
        g.beginPath()
        g.moveTo(30 + x, 10 + y)
        g.fillStyle = "red"
        g.lineTo(70 + x, 20 + y)
        g.lineTo(60 + x, 40 + y)
        g.lineTo(20 + x, 30 + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#CCCCCC"
        g.lineTo(20 + x, 50 + y)
        g.lineTo(60 + x, 60 + y)
        g.lineTo(60 + x, 40 + y)
        g.lineTo(20 + x, 30 + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#999999"
        g.moveTo(60 + x, 40 + y)
        g.lineTo(70 + x, 20 + y)
        g.lineTo(80 + x, 30 + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.lineTo(60 + x, 40 + y)
        g.lineTo(60 + x, 60 + y)
        g.lineTo(80 + x, 50 + y)
        g.lineTo(80 + x, 30 + y)
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#63C5F8"
        g.moveTo(30 + x, 40 + y)
        g.lineTo(50 + x, 45 + y)
        g.lineTo(50 + x, 50 + y)
        g.lineTo(30 + x, 45 + y)
        g.closePath()
        g.fill()
    }

    tekenKerstboom(g, x, y) {
        //stam
        g.fillStyle = "#4d3808"
        g.beginPath()
        g.moveTo(x, y)
        g.lineTo(x + 50, y)
        g.lineTo(x + 50, y + 50)
        g.lineTo(x, y + 50)
        g.closePath()
        g.fill()
        g.stroke()

        //body
        g.fillStyle = "#2db81d"
        g.beginPath()
        g.lineTo(x - 50, y)
        g.lineTo(x + 100, y)
        g.lineTo(x + 25, y - 200)
        g.closePath()
        g.fill()
        g.stroke()

        let xBallen = x
        let yBallen = y
        for (let i = 0; i < 8; i++) {
            this.tekenBal(g, xBallen, yBallen)
            xBallen += 10
            yBallen += 20
            if (xBallen >= x + 20) {
                xBallen = x
            }

        }
    }

    tekenBal(g, x, y) {
        g.fillStyle = "#aa5dd4"
        g.beginPath()
        g.arc(x + 20, y - 150, 10, 0, Math.PI * 2)
        g.closePath()
        g.fill()
        g.stroke()
    }
}

let app = new App();
app.runApplication();