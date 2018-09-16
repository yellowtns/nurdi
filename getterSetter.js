const team = {
  _players: [
    				 {firstName: "Pablo",lastName:"Sanchez",age: 11},
             {firstName: "Lionel",lastName:"Messi",age: 21},
             {firstName: "Mohammad",lastName:"Salah",age: 20}            
  ],
  _games : [
  					{opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
    				{opponent: "Ronaldo", teamPoints: 41, opponentPoints: 30},
    				{opponent: "Aguero", teamPoints: 40, opponentPoints: 29}
  ],

get player () {
    return this._players;
		}
  
};
console.log(team.players);

/*
player : function () {
    return this._players;
		}
  
console.log(team.players());

*/
