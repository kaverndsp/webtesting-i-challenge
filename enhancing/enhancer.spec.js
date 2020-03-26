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

    describe('succeed()', function(){
        it('testing enhancement & durability for succeeding', function (){
           const testItem = {
               enhancement: 18,
               durability: 40
           }

           const controlItem = {
               enhancement: 19,
               durability:30
           }
           
           
            expect(succeed(testItem)).toStrictEqual(controlItem);
        })
    })

    describe('fail()', function(){
        it('testing fail', function (){
           const testItem = {
               enhancement: 3,
               durability: 40
           }

           const controlItem = {
               enhancement: 3,
               durability:35
           }
           
           
            expect(fail(testItem)).toEqual(controlItem);
        })
    })
});