require('express')()
.get("/", (req, res) => {
    return res.send("test")
})
.get("/study", (req,res) => {
    return res.send("pagina study")
})
.listen(5500)

