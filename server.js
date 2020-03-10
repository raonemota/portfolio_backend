const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    
const data = {
    avatar_url: "https://media-exp1.licdn.com/dms/image/C4E03AQGphaeaqnnu1Q/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=9-2ETUonMQ0qBSzfstRhiGYNGG_XX06T5eBQimfv3ic",
    name: "Raone Mota",
    title: "Aspirante a Dev FullStack",
    subtitle: "Programador iniciante em front-end Utilizando as ferramentas aprendidas no LaunchBase do RocketSeat.",
    link: [
        { name: "Github", url: "https://github.com/raonemota/"},
        { name: "Instagram", url: "https://instagram.com/raonemota"},
        { name: "LinkedIn", url: "https://www.linkedin.com/in/raonemota"}
    ]
}

    return res.render("about", {item: data})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", { items: videos })
})

server.get("/contents", function(req, res){

    const cursos = {
        curso: [
            { name: "starter", description: "Curso para iniciantes no Javascript", qntd_modules: 7, price: "Free", img: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg" },
            { name: "lauchbase", description: "Curso para quem já conhece um pouco de Javascript", qntd_modules: 10, price: "Free", img: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg" },
            { name: "gostack", description: "Curso para quem já domina o JS e quer ainda mais!", qntd_modules: 6, price: "Free", img: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg" }, 
        ]
    }


    return res.render("contents", { items: videos, cursos })
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        return res.render("not-found")
    }

    return res.render("video", { item: video })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})



server.listen(5000, function(){
    console.log("Server is runnig")
})