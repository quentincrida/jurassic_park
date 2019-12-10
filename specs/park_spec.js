const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    park = new Park("Queens", 10, []);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a name', function() {
    const name = "Queens";
    assert.strictEqual(park.name, name);
  });

  it('should have a ticket price', function() {
    const ticket_price = 10;
    assert.strictEqual(park.ticket_price, ticket_price);
  });

  it('should have a collection of dinosaurs', function() {
    const dinosaur_collection = [];
    assert.deepEqual(park.dinosaur_collection, dinosaur_collection);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaur_collection, expected);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
