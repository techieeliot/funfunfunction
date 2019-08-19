var players = [
    {name:'Chuck',   team:'Suns'},
    {name:'Reggie',  team:'Pacers'},
    {name:'Mike',    team:'Bulls'},
    {name:'Larry',   team:'Celtics'},
    {name:'Scottie', team:'Bulls'}
]

var bulls = players.filter(players=> players.team === 'Bulls');

console.log(bulls);
