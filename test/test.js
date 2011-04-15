var vows = require('vows')
  , assert = require('assert')
  , dt = require('../dt')


vows.describe('DT Object').addBatch({
  'DT constructor' : {
    topic : dt,
    
    'create with js Date' : function(t){
      var d = dt(new Date(2011, 03, 15, 14, 06, 00))
      assert.equal(d.jsDate(), new Date(2011, 03, 15, 14, 06, 00));
      assert.equal(d.getISOString(), '2011-04-15T14:06:00Z')
    }
    
  , 'create with Year' : function(t){
      var d = dt(2011)
      assert.equal(d.jsDate(), new Date(2011));
    }

  , 'create with Year, Month' : function(t){
      var d = dt(1990, 1)
      assert.equal(d.jsDate(), new Date(1990, 1));
    }

  , 'create with Year, Month, Day' : function(t){
      var d = dt(1923, 5, 8)
      assert.equal(d.jsDate(), new Date(1923, 5, 8));
    }

  , 'create with Year, Month, Day, Hour' : function(t){
      var d = dt(2020, 12, 12)
      assert.equal(d.jsDate(), new Date(2020, 12, 12));
    }

    
  }  
}).export(module)