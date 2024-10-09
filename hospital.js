function Hospital(name, location, numberOfBeds){
    this.name=name
    this.location=location
    this.numberOfBeds=numberOfBeds
    this.totalCapacity = function(wards, beds){
          return wards * beds
    }
}
let wards = 23
let hospital = new Hospital("Nsambya", "Kampala", 20)
console.log(hospital.totalCapacity(wards, hospital.numberOfBeds))