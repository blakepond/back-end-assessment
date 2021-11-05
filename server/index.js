const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You are in good hands this evening.",
        "You have the power to write your own fortune.",
        "You understand how to have fun with others and to enjoy your solitude.",
        "You will travel far and wide, both pleasure and business.",
        "Your mind is your greatest asset."
      ]
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex]

      res.status(200).send(randomFortune)
})

app.get("/api/suggestion", (req,res) => {
  let suggestions = ["Find what motivates you",
    "Remove distratctions", 
    "Learn how to meditate"
  ]
  res.status(200).send(suggestions)
})

let goals = []

app.post("/api/form", (req,res) => {
  const {newPost} = req.body
  goals.push(newPost)
  res.status(200).send(goals)

})

app.listen(4000, () => console.log("Server running on 4000"));
