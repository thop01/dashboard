import {getData} from './data-service.js';
import { ListOfGames } from './list-of-games.js';


getData("js/games.json", (games)=>{
    const gameList = new ListOfGames(games);
    document.querySelector(".amount-of-games").textContent = gameList.getAmountOfGames();
    document.querySelector(".game-with-users").textContent = gameList.getPercentageOfGamesWithUsers();
});

















// console.log(JSON.stringify([
//     {gameTitle: "Nebula's Quest", developer: "Aurora",          genre: "Strategy", players: 41, value: 100, place: "Singapore", latitude: 1.352083, longitude: 103.819839},
//     {gameTitle: "Shadow Realms", developer: "Phoenix",          genre: "Action", players: 14, value: 4000, place: "new York", latitude: 40.712776, longitude: -74.005974},
//     {gameTitle: "Crystal Caverns", developer: "Orion",          genre: "Action", players: 0, value: 40, place: "Amsterdam", latitude: 52.370216, longitude: 4.895168},
//     {gameTitle: "Galactic Odyssey", developer: "Orion",         genre: "Strategy", players: 2, value: 1000, place: "Amsterdam", latitude: 52.070499, longitude: 4.300700},
//     {gameTitle: "Wild Frontier", developer: "Luna",             genre: "Survival", players: 8, value: 6000, place: "Rotterdam", latitude: 51.924419, longitude: 4.477733},
//     {gameTitle: "Cybernauts Unleashed", developer: "Luna",      genre: "Adventure", players: 8, value: 8000, place: "Rotterdam", latitude: 51.924419, longitude: 4.477733},
//     {gameTitle: "Dragon's Hoard", developer: "Valencia",        genre: "Open-world", players: 242, value: 10000, place: "Den Haag", latitude: 52.070499, longitude: 4.300700},
//     {gameTitle: "Mystic Maze", developer: "Valencia",           genre: "Open-world", players: 23, value: 100, place: "Den Haag", latitude: 52.070499, longitude: 4.300700},
// ]));
