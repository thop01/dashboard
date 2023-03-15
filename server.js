import express from 'express';
import * as fs from 'node:fs';
import { v4 as newId } from 'uuid';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { error } from 'node:console';

console.log("node is started");

console.log(newId());



const app = express();
const port = 3000;

let games = [];
getGames();
console.log(games);



app.use(express.static('public'));

app.get('/api/games', (req, res) => {
    res.json(games);
});

app.get('/api/games/:id', (req, res) => {
  const id = req.params.id;
    const obj = games.filter(game=> game.id == id)[0];
    if(obj){
        res.json(obj);
    }else{
        res.status(404).send('Sorry, we cannot find that!')
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//initGamesInDB();

function initGamesInDB(){
  let games = [
    {id:newId(), gameTitle: "Nebula's Quest",       developer: "Aurora",    genre: "Strategy",  players: 41, value: 100,    place: "Singapore", latitude: 1.352083,  longitude: 103.819839},
    {id:newId(), gameTitle: "Shadow Realms",        developer: "Phoenix",   genre: "Action",    players: 14, value: 4000,   place: "new York",  latitude: 40.712776, longitude: -74.005974},
    {id:newId(), gameTitle: "Crystal Caverns",      developer: "Orion",     genre: "Action",    players: 0, value: 40,      place: "Amsterdam", latitude: 52.370216, longitude: 4.895168},
    {id:newId(), gameTitle: "Galactic Odyssey",     developer: "Orion",     genre: "Strategy",  players: 2, value: 1000,    place: "Amsterdam", latitude: 52.070499, longitude: 4.300700},
    {id:newId(), gameTitle: "Wild Frontier",        developer: "Luna",      genre: "Survival",  players: 8, value: 6000,    place: "Rotterdam", latitude: 51.924419, longitude: 4.477733},
    {id:newId(), gameTitle: "Cybernauts Unleashed", developer: "Luna",      genre: "Adventure", players: 8, value: 8000,    place: "Rotterdam", latitude: 51.924419, longitude: 4.477733},
    {id:newId(), gameTitle: "Dragon's Hoard",       developer: "Valencia",  genre: "Open-world",players: 242, value: 10000, place: "Den Haag",  latitude: 52.070499, longitude: 4.300700},
    {id:newId(), gameTitle: "Mystic Maze",          developer: "Valencia",  genre: "Open-world",players: 23, value: 100,    place: "Den Haag",  latitude: 52.070499, longitude: 4.300700},
    {id:newId(), gameTitle: "Mystic Maze",          developer: "Valencia",  genre: "Open-world",players: 23, value: 100,    place: "Den Haag",  latitude: 52.070499, longitude: 4.300700},
    {id:newId(), gameTitle: "Mystic Maze",          developer: "Valencia",  genre: "Open-world",players: 23, value: 100,    place: "Den Haag",  latitude: 52.070499, longitude: 4.300700},
    {id:newId(), gameTitle: "Mystic Maze",          developer: "Valencia",  genre: "Open-world",players: 23, value: 100,    place: "Den Haag",  latitude: 52.070499, longitude: 4.300700},
  ];
games = JSON.stringify(games);

fs.writeFile("data/games.json", games, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

}

 function getGames(){


   fs.readFile("data/games.json", (error, data)=>{
     games = JSON.parse(data.toString());
  
     if (error) console.log(error);
  console.log("Successfully read to File.");
    });
}

