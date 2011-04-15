var vows = require('vows')
  , assert = require('assert')
  , dt = require('../dt')


vows.describe('DT Object').addBatch({
  'DT constructor' : {
    topic : dt,
    
    'create with js Date' : function(t){
      var d = dt(new Date(Date.UTC(2011, 03, 15, 14, 06, 00)))
      assert.equal(d.jsDate(), new Date(Date.UTC(2011, 03, 15, 14, 06, 00)));
      assert.equal(d.getISOString(), '2011-04-15T14:06:00Z')
    }
  
  , 'create with milliseconds' : function(t){
    var d = dt(1000 * 60 * 60)
    assert.equal(d.jsDate(), new Date(1000 * 60 * 60));
  }
  
  , 'create with IETF-compliant RFC 1123 timestamps' : function(t){
    var d = dt('January 1, 1970, 00:00:00 UTC')
    assert.equal(d.jsDate(), new Date('January 1, 1970, 00:00:00 UTC'));
    // TODO - many other fmts.
  }
    
  , 'create with Year, Month, Day' : function(t){
      var d = dt(1923, 5, 8)
      assert.equal(d.jsDate(), new Date(Date.UTC(1923, 5, 8)));
    }

  , 'create with Year, Month, Day, Hour' : function(t){
      var d = dt(2020, 12, 12)
      assert.equal(d.jsDate(), new Date(Date.UTC(2020, 12, 12)));
    }

  , 'create with Year, Month, Day, Hour, Minute' : function(t){
      var d = dt(1891, 4, 4, 13, 59)
      assert.equal(d.jsDate(), new Date(Date.UTC(1891, 4, 4, 13, 59)));
    }
  
  , 'create with Year, Month, Day, Hour, Minute, Second' : function(t){
      var d = dt(2013, 11, 23, 23, 59, 59)
      assert.equal(d.jsDate(), new Date(Date.UTC(2013, 11, 23, 23, 59, 59)));
    }
    
  , 'create with Year, Month, Day, Hour, Minute, Second, Milli' : function(t){
      var d = dt(2021, 10, 9, 8, 7, 6, 5)
      assert.equal(d.jsDate(), new Date(Date.UTC(2021, 10, 9, 8, 7, 6, 5)));
    }


  } 
 
, 'DT Methods' : {
  topic : function(){
    return new dt(2011, 04, 15, 14, 21, 30, 0)
  }  
  , toISOString : function(){}
  
  
  
  } 
}).addBatch({
  'DT Interval' : {}
, 'DT Parsing' : {}  
}).export(module)