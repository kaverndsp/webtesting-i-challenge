const {get, repair, fail, succeed} = require('./enhancer.js');

it("should run the tests", function() {
    expect(true).toBe(true);
  });


describe("enhancer.js", function() {
    
    // REPAIR TESTS
    describe("repair()", function() {
        it("restores durability to 100", () => {
       
        expect(repair({durability: 50}).durability).toBe(100);
        expect(repair({durability: -50}).durability).toBe(100);
        expect(repair({durability: undefined}).durability).toBe(100);
        expect(repair({durability: null}).durability).toBe(100);
        
      });
    });

    describe('success()', function(){

    })
});