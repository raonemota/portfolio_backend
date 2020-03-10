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
    return res.render("contents", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id
    const video = videos.find(function(video){
        if(video.id == id){
            return true
        }
    })

    if(!video){
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function(){
    console.log("Server is runnig")
})