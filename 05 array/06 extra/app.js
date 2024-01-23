class App {
    runApplication() {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        let objects = [new Object("boom", 400, 300, "rgb(255, 0, 128)", 1.2), new Object("huis", 100, 100, "yellow", 0.8)]
        objects.push(new Object("huis", 200, 200, "blue", 0.6))
        objects.push(new Object("huis", 240, 100, "slategray", 1.8))
        objects.push(new Object("huis", 500, 200, "green", 1.4))
        objects.splice(1, 1)
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw(g)
        }
    }

    tekenHuis(g, x, y, color, sizeMultiplier) {
        g.beginPath()
        g.moveTo(30 * sizeMultiplier + x, 10 * sizeMultiplier + y)
        g.fillStyle = color
        g.lineTo(70 * sizeMultiplier + x, 20 * sizeMultiplier + y)
        g.lineTo(60 * sizeMultiplier + x, 40 * sizeMultiplier + y)
        g.lineTo(20 * sizeMultiplier + x, 30 * sizeMultiplier + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#CCCCCC"
        g.lineTo(20 * sizeMultiplier + x, 50 * sizeMultiplier + y)
        g.lineTo(60 * sizeMultiplier + x, 60 * sizeMultiplier + y)
        g.lineTo(60 * sizeMultiplier + x, 40 * sizeMultiplier + y)
        g.lineTo(20 * sizeMultiplier + x, 30 * sizeMultiplier + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#999999"
        g.moveTo(60 * sizeMultiplier + x, 40 * sizeMultiplier + y)
        g.lineTo(70 * sizeMultiplier + x, 20 * sizeMultiplier + y)
        g.lineTo(80 * sizeMultiplier + x, 30 * sizeMultiplier + y)
        g.closePath()
        g.fill()
        g.stroke()

        g.beginPath()
        g.lineTo(60 * sizeMultiplier + x, 40 * sizeMultiplier + y)
        g.lineTo(60 * sizeMultiplier + x, 60 * sizeMultiplier + y)
        g.lineTo(80 * sizeMultiplier + x, 50 * sizeMultiplier + y)
        g.lineTo(80 * sizeMultiplier + x, 30 * sizeMultiplier + y)
        g.fill()
        g.stroke()

        g.beginPath()
        g.fillStyle = "#63C5F8"
        g.moveTo(30 * sizeMultiplier + x, 40 * sizeMultiplier + y)
        g.lineTo(50 * sizeMultiplier + x, 45 * sizeMultiplier + y)
        g.lineTo(50 * sizeMultiplier + x, 50 * sizeMultiplier + y)
        g.lineTo(30 * sizeMultiplier + x, 45 * sizeMultiplier + y)
        g.closePath()
        g.fill()
    }

    // sizeMultiplier werkt hier bij de boom alleen bij de stam, nog niet bij de rest
    tekenKerstboom(g, x, y, color, sizeMultiplier) {
        //stam
        g.fillStyle = "#4d3808"
        g.beginPath()
        g.moveTo(x, y)
        g.lineTo(50 * sizeMultiplier + x, y)
        g.lineTo(50 * sizeMultiplier + x, 50 * sizeMultiplier + y)
        g.lineTo(x, 50 * sizeMultiplier + y)
        g.closePath()
        g.fill()
        g.stroke()

        //body
        g.fillStyle = color
        g.beginPath()
        g.lineTo(x - 50, y)
        g.lineTo(100 + x, y)
        g.lineTo(25 + x, y - 200)
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

class Object {
    constructor(name, x, y, color, sizeMultiplier) {
        this.name = name
        this.x = x
        this.y = y
        this.color = color
        this.sizeMultiplier = sizeMultiplier
    }

    draw(g) {
        if (this.name == "huis") {
            app.tekenHuis(g, this.x, this.y, this.color, this.sizeMultiplier)
        }
        else if (this.name == "boom") {
            app.tekenKerstboom(g, this.x, this.y, this.color, this.sizeMultiplier)
        }
        else {
            console.error(`${this.name} is not a valid name`)
        }
    }
}

let app = new App();
app.runApplication();