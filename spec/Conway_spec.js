describe("Conway's Game of Life", function() {
 
  function censusTaker() {
   return {
     takeCensus: function() {}
   }; 
  }
  function world(censusTaker) {
    return {
      nextGeneration: function() {
        censusTaker.takeCensus();
      },
  
      containsNoLife: function() {
        return true;
      } 
    };
  } 
  describe("given a world with no life", function() {
    describe("in the next generation", function() {
      it("should also have no life", function() { 
        var c = censusTaker();
        spyOn(c,'takeCensus');

        var w = world( c );
	 
        w.nextGeneration();
	 
        expect(c.takeCensus).toHaveBeenCalled();
        expect(w.containsNoLife()).toBeTruthy();
      });
    });
  });  
});
