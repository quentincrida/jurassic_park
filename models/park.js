const Park = function (name, ticket_price, dinosaur_collection){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaur_collection = dinosaur_collection
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaur_collection.push(dinosaur);
}
Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaur_collection.pop(dinosaur);
}



module.exports = Park;
