/*
 * Utility functions
 */
 
(function(){
    
    var util = {};
    
    
    // empty function
    util.emptyFunc = function(){
        return function(){};
    };
    
    
    // check element types
    
    util.isString = function(){
        
    };
    

    util.isNumber = function(v){
        // adding 0 will convert the argument to number
        // then check if it is still NaN.
        return ! isNaN(v + 0);
    };
    
    
    util.isFunction = function(){
        
    };
    
    
    util.isObject = function(){
        
    };
    
    
    util.isUndefined = function(){
        
    };
    
    
    util.isEmpty = function(){
        
    };
    
    // Left Trim
    util.ltrim = function(str){
        return str.replace(/^\s+/, "");
    };
    
    
    // Right Trim
    util.rtrim = function(str){
        return str.replace(/\s+$/, "");
    };
    
    
    // Return Size of the element. Just an alternative for using "length" property
    util.size = function(elem){
        return elem.length;
    };
    
    
    
    // Add it to hector namespace
    hector.util = util;
    
})();