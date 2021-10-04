const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
const pokedex = [
    {numero: 001, nome:"Bulbasaur", tipo: "grass", imagem: src="/img/Bulbasaur.png", descricao: "Pokemon inicial de Kanto", altura: 0.71, peso:6.9, categoria: "seed pokemon", habilidade:"overgrow"},
    {numero: 004, nome:"Charmander", tipo: "fire", imagem: href="/img/Charmander.png", descricao: "Pokemon inicial de Kanto", altura: 0.61, peso:8.5, categoria: "lizard pokemon", habilidade:"Blaze"},
    {numero: 007, nome:"Squirtle", tipo: "water", imagem: href="/img/Squirtle.png", descricao: "Pokemon inicial de Kanto", altura: 0.51, peso:9, categoria: "Tiny turtle pokemon", habilidade:"overgrow"}
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

var message ="";
var poke;
app.get("/", (req, res) => {
    setTimeout(() => {message = "";}, 1000);
    res.render("index", { pokedex: pokedex, message:message });
  })
app.get("/index", (req, res) => {
    setTimeout(() => {message = "";}, 1000);
    res.render("index", { pokedex: pokedex, message:message});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});
app.get("/Pokedex", (req, res) => {
    res.render("Pokedex", {pokedex:pokedex});
});

app.get("/detalhes/:ind", (req, res) => {
    const indice = req.params.ind;
    poke = pokedex[indice];
    res.render("detalhes", { pokedex: pokedex,poke});
});

app.post ( "/form",  ( req ,  res )  =>  {
    const  { nome , tipo , imagem , descricao , altura , peso , categoria , habilidade } = req.body ;
    pokedex.push( {nome ,tipo ,imagem ,descricao , altura ,  peso ,  categoria ,  habilidade } ) ; 
    message  =  "Pokémon cadastrado" ;
    res.redirect ( "/" );
  } ) ;

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);