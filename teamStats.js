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
	get players () {
    return this._players;
		},

	get games () {
    return this._games;
		},
  
  addPlayer (firstName, lastName, age){
		let player = {
    	firstName : firstName,
    	lastName : lastName,
    	age : age
    };
   this._players.push(player); 
  },
  
  addGame (opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
  
  
};

team.addPlayer ("Steph", "Curry", 28);
team.addPlayer ("Lisa", "Leslie", 44);
team.addPlayer ("Bugs", "Bunny", 76);

team.addGame ("Titans", 100, 98);
console.log(team.players); // using getter, or we can use team._players
console.log(team.games);


