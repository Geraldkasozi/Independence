/*Model a Ugandan football team using objects. Each player should have properties like
name, position, and goalsScored, and the team should have a method to calculate
the total goals scored by all players.*/

let footballTeam = {
   players:[
 {
    name:"Watenga Ismail",
    position:"goal Keeper",
    goalScored:1
   },
   {
    name:"Bevis Mugabi",
    position:"Defender",
    goalScored:5
   },
   {
    name:"Elvis Bwomono",
    position:"Defender",
    goalScored:10
   },
   {
    name:"Khalid Aucho",
    position:"Midfielder",
    goalScored:17
   },
   {
    name:"Halid Lwaliwa",
    position:"Midfielder",
    goalScored:11
   },
   {
    name:"Milton Kalisa",
    position:"Forward",
    goalScored:18
   },
   {
    name:"Rogers Mato",
    position:"Midfielder",
    goalScored:9
   },
   {
    name:"Travis Mutyaba",
    position:"Forward",
    goalScored:20
   },
   {
    name:"Fahad Bayo",
    position:"Forward",
    goalScored:7
   },
   {
    name:"Abul Azizi",
    position:"Midfielder",
    goalScored:13
   },
   {
    name:"Kenneth Semakula",
    position:"Defender",
    goalScored:15
   },
   {
    name:"Allan Oyirwoth",
    position:"Forward",
    goalScored:2
   }
],
    calculateGoals:function(){
        let total = 0
         this.players.forEach(player =>{
            total+=player.goalScored
         })
         return `The total goals are ${total} goals`
         }
       }


let total = footballTeam.calculateGoals(footballTeam["player"])
console.log(total)