const proffys = [
    {
        name: "Diego Rodrigues",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "75981320771",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1240]
    },

    {
        name: "Leonardo Santana",
        avatar: "https://avatars1.githubusercontent.com/u/17907755?s=460&u=a5319f790904b526728f90164ef06ed26cca3008&v=4",
        whatsapp: "75981460783",
        bio: "Entusiasta das melhores tecnologias de matemática avançada.",
        subject: "Matematica",
        cost: "20",
        weekday: [2],
        time_from: [720],
        time_to: [1240]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",

]


function getSubject(subjectNumber) {
    const arryPosition = +subjectNumber - 1
    return subjects[arryPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }


    return res.render("give-classes.html", {proffys, subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)

