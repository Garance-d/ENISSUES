const express = require("express");

const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extends : false}));

let tickets = [{
  id: 1,
  titre : "Ticket 1",
  description : "Description du ticket 1",
  date_creation : "2022 12:00",
  auteur : "x",
  description : "xxxxxxxxxx",
  etat : "xxxxxxxx",
}
  {
    id: 2,
    titre : "Ticket 2",
    description : "Description du ticket 2",
    date_creation : "2023 11:00",
    auteur : "y",
    description : "xxxxxxxxxx",
    etat : "xxxxxxxx",
  }
];

/* Route */

app.get(["/", "/tickets"] (req, res) => {

    res.render("index");
  });

listen.port ("index")



  app.post("index", (req, res) => {
  
    //const ville = req.body.ville;
    //const habitant = req.body.habitant;
    const { problèmes } = req.body;
  
    //villes.push({ ville: ville, habitant: habitant });
    problèmes.push({ problèmes });
    res.redirect("/");
  });


  app.listen(port, () => {
    console.log('Le serveur tourne sur le port $ {port}');
  });

let selectProb = document.getElementById("problèmes");
// let pProb = document.getElementById("");
let divProb = document.getElementById("problèmes");

selectProb.addEventListener("change", function(){
    let index = selectProb.selectIndex;
    divProb.innerHTML = "selectIndex : " + index;
})