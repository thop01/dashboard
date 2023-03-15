export class ListOfGames{

    constructor(games){
        this.games = games;
        console.log(this.games);
    }

    getAmountOfGames(){
        let result = this.games.length;

        return result;
    }

    getPercentageOfGamesWithUsers(){
        let result = 0;
        let amountOfGames = this.getAmountOfGames();
        let gameWithUsers = 0;
        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];
            if(game.players > 0){
                gameWithUsers = gameWithUsers + 1;
            }
        }
        console.log(amountOfGames);
        console.log(gameWithUsers)
        result = gameWithUsers/ amountOfGames *100;
        result = Math.round(result);
        return result + "%";
    }


}