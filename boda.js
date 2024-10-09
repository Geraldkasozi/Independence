let boda_boda ={
    name:"Kajoba",
    location:"Mukono",
    bodaType:"Bajagi",
    riderIncome: function(distance, fare){
         return `The Income is ${distance * fare} UGX`
    }
}
console.log(boda_boda.riderIncome(36, 2000))