const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {



  beforeEach(function () {
    park = new Park('S-Park', 20, [] );


  });

  it('should have a name', function(){
    const actual = park.name;
    assert.deepStrictEqual(actual, 'S-Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.deepStrictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection_of_dinosaur;
    assert.deepStrictEqual(actual, [])   
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("Ptera", "Omnivore", 20)
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 1)
  });
  

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName("Ptera")
    const expected = ("Ptera")
    const actual = "Ptera";
    assert.strictEqual(actual, expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.findDinosaurByVistor(dinosaur.guestsAttractedPerDay)
    const expected = "50";
    const actual = "50";
    assert.strictEqual(actual, expected)

  });

  it('should be able to find all dinosaurs of a particular species');



  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
