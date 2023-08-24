import express from 'express'

const app = express();
const port = 3000

app.listen(port, function() {
    console.log(`App started on port number ${port}`)
});

let results = [
    {    
    question1: true,
    question2: true,
    question3: true,
    question4: true,
    question5: true,
    question6: true,
},
{    
    question1: true,
    question2: true,
    question3: true,
    question4: true,
    question5: true,
    question6: true,
},
]

app.get("/", function(req,res) {
    res.send("Hello world")
    let scores = []
    for (let i = 0; i < results.length; i++) {
        let score = 0
        let result = results[i]
            if (result.question1 === true) score +=3
            if (result.question2 === true) score +=1
            if (result.question3 === true) score +=1
            if (result.question4 === true) score +=4
            if (result.question5 === true) score +=2
            if (result.question6 === true) score +=1
            if (result.question7 === true) score +=1
            if (result.question8 === true) score +=2
            if (result.question9 === true) score +=1
            if (result.question10 === true) score +=4
            if (result.question11 === true) score +=2
            if (result.question12 === true) score +=1
            if (result.question13 === true) score +=5
            if (result.question14 === true) score +=1
            if (result.question15 === true) score +=1
            if (result.question16 === true) score +=1
            if (result.question17 === true) score +=1
            if (result.question18a === "Several days") score +=1 // Probably need to create a separate score variable to add 18a and 18b together to assign if its high risk or not
            if (result.question18b === "More than half the days") score +=2
            if (result.question18c === "Nearly every day") score +=3
        scores.push(score)
        }
    console.log(scores)
});

app.post("/", (req)=> {
    req.body.command()
    }
);
