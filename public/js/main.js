import { ListOfGames } from './list-of-games.js';

fetch("/api/games")
    .then(d => d.json())
    .then(data => initGames(data));

function initGames(games){
    const gameList = new ListOfGames(games);
    document.querySelector(".amount-of-games").textContent = gameList.getAmountOfGames();
    document.querySelector(".game-with-users").textContent = gameList.getPercentageOfGamesWithUsers();     
}
    


