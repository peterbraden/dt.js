// DT.js -> Date Replacement
//
//  Drawing from:
//  * datejs : http://code.google.com/p/datejs/
//  * Timezone.js : https://github.com/mde/timezone-js
//  * ISO 8601 / RFC 3339
//  * Python's datetime, in particular strftime
//  * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date
//
//  Maintains compatability with native js Date
//  Compatable with browser & server js environments.
//
//Examples:
//
//    var d = DT.strptime('18 Jun 2001 at 11pm', '%d %b %Y at %I%p');
//  
//    d.toISOString()
//    // returns '2001-06-18T23:00:00Z'
//  
//    d.setTZ(4) // TZ is difference from UTC. unless specified, all DT are UTC.
//  
//


(function(){
  
// ### CONSTANTS ###
var second = 1
  , minute = 60 * second
  , hour = 60 * minute
  , day = 24 * hour
  , monthsAbbr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  

// ### DT.constructor ###
var DT = function(){
    
  return {


  
    
//  Unless specified, DT's are UTC. This method allows us to adjust the TZ
//  offset thus:
//    
//      DT('2011-04-15T09:00:00Z').setTZ(-3.5)
//      => DT('2011-04-15T09:00:00-03:30')
//
//  If you want to adjust the TZ, whilst maintaining the same time, use moveTZ().
//  To set a timezone whilst creating a time, see DT#constructor
    setTZ : function(){
      // TODO
    }  
    
//  moveTZ changes the timezone whilst maintaining the same 'time', thus:
//    
//      DT('2011-04-15T18:30:00Z').setTZ(4)
//      // => DT('22011-04-15T22:30:00+04:00')
//    
  , moveTZ : function(){
      //TODO
    }  
  

// Print time
  , strftime : function(){
    //TODO
    }
    
//  format according to ISO 8601
  , toISOString : function(){
    //TODO
    }
  , getTimezoneOffset: function () {}
  , clone : function(){}
  , isBefore : function(){}
  , isAfter : function(){}
  , difference : function(){}
  , jsDate : function(){}
  
  }  
}  
  
DT.strptime = function(){
  //TODO
}  

DT.today = function(){}  
DT.parse = function(){} // 'Magic' version of strptime   

DT.Interval = function(secs){
  var i = new Number(secs)  
  return i;
}  
  
  
if(typeof exports != 'undefined'){  
  module.exports = DT
}    
  
})();  