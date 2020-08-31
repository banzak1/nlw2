const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    
    proffyValue = {
        name: "Leonardo Santana",
        avatar: "https://avatars1.githubusercontent.com/u/17907755?s=460&u=a5319f790904b526728f90164ef06ed26cca3008&v=4",
        whatsapp: "75981460783",
        bio: "Entusiasta das melhores tecnologias de matemática avançada.",
        
    }

    classValue = {
        subject: "Matematica",
        cost: "20",
        
    }

    classScheduleValues = [
        {
        weekday: 2,
        time_from: 720,
        time_to: 1240
        },
        {
            weekday: 3,
            time_from: 720,
            time_to: 1240
        }
    ]

})

await createProffy(db, {proffyValue, classValue, classScheduleValues})