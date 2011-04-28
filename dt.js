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

// Try and work out whether d is a javascript date object.
var isJsDate = function(d){
  return !!(d && d instanceof Date && !d.dt)
}

//Make a UTC js date based on args
var parseArguments = function(args){
  
  if (args.length > 2 && args.length < 8)
    return [new Date(Date.UTC.apply({}, args)), 0]
  
  if (args.length === 8)
    return [new Date(Date.UTC.apply({}, args)), args[7]]
    
  switch (args.length){
    case 0:
      //TODO - now;
      break;
    
    case 1:
      var d = args[0]
      if (typeof d === "number")
        return [new Date(d), 0]
        
      if (isJsDate(d)){
        return [new Date(Date.UTC(
                  d.getUTCFullYear()
                , d.getUTCMonth()
                , d.getUTCDate()
                , d.getUTCHours()
                , d.getUTCMinutes()
                , d.getUTCSeconds()
                , d.getMilliseconds()))
                , d.getTimezoneOffset() / minute]
      }  
      break
    
    
  }
  return []//TODO Raise appropriate error
}  

// Pad a number with a 0  
function pad(n){
  return n<10 ? '0'+n : n
}


// ### DT.constructor ###
var DT = function(){
  var parsed = parseArguments(arguments)
    , jsDate = parsed[0]
    , tz = parsed[1] || 0// Timezone offset, hours.
  
  delete parsed

  var dt =  {
    dt : true


  
    
//  Unless specified, DT's are UTC. This method allows us to adjust the TZ
//  offset thus:
//    
//      DT('2011-04-15T09:00:00Z').setTZ(-3.5)
//      => DT('2011-04-15T09:00:00-03:30')
//
//  If you want to adjust the TZ, whilst maintaining the same time, use moveTZ().
//  To set a timezone whilst creating a time, see DT#constructor
  , setTZ : function(tz){
      tz = tz; 
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
      var t = (jsDate.getUTCFullYear()+'-'
         + pad(jsDate.getUTCMonth()+1)+'-'
         + pad(jsDate.getUTCDate())+'T'
         + pad(jsDate.getUTCHours())+':'
         + pad(jsDate.getUTCMinutes())+':'
         + pad(jsDate.getUTCSeconds()))
    
      if (tz === 0){
        return t + 'Z'
      } else{
        return t + ((tz>0)?'+':'-')
          + pad(Math.abs(parseInt(tz))) + ":"
          + pad(Math.abs((tz*60)%60))
      }  

    }
    
  , getTimezoneOffset: function () {
      return tz;
    }
    
  , clone : function(){
      return DT(jsDate);
    }
    
  , isBefore : function(d){
    return dt.difference(d) < 0 
  }
  
  , isAfter : function(d){
    return dt.difference(d) > 0 
  }

  , difference : function(d){
      return DT.Interval(jsDate - d.jsDate())
    }
  
  , jsDate : function(){
      return jsDate;
    }
  }  
  
  return dt
}  
  
DT.strptime = function(){
  //TODO
}  

DT.today = function(){
  return DT()
}  

// 'Magic' version of strptime   
DT.parse = function(){
// TODO  
}

DT.Interval = function(millis){
  var i = new Number(millis)
  
  i.seconds = function(){return parseInt(millis/(second * 1000))}
  i.minutes = function(){return parseInt(millis/(minute * 1000))}
  i.hours = function(){return parseInt(millis/(hour * 1000))}
  i.days = function(){return parseInt(millis/(day * 1000))}
  
  return i;
}  
  
  
if(typeof exports != 'undefined'){  
  module.exports = DT
}    
  
})();  