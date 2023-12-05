class App
{
    runApplication()
    {
        console.log("hello world")
        let title = document.getElementById("newstitle")
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(title)

        let random = Math.random()
        console.log(random)
        if (random < 0.2)
        {
            title.style.backgroundColor = "rgb(255, 0, 0)";
            newsitem1.style.backgroundColor = "rgb(255, 0, 168)"
            newsitem2.style.backgroundColor = "rgb(124, 128, 163)"
        }
        else if(random >= 0.2 && random <= 0.6)
        {
            title.style.backgroundColor = "rgb(0, 255, 0)"
            newsitem1.style.backgroundColor = "rgb(168, 168, 0)"
            newsitem2.style.backgroundColor = "rgb(255, 200, 120)"
        }
        else if(random > 0.6 && random <= 0.75)
        {
            title.style.backgroundColor = "rgb(0, 0, 255)"
            newsitem1.style.backgroundColor = "rgb(0, 168, 255)"
            newsitem2.style.backgroundColor = "rgb(0, 0, 0)"
        }
        else
        {
            title.style.backgroundColor = "rgb(255, 255, 0"
            newsitem1.style.backgroundColor = "rgb(255, 168, 255)"
            newsitem2.style.backgroundColor = "rgb(64, 168, 255)"
        }
    }
}

let app = new App()
app.runApplication()