(function(global){
    
    var hector = {
        VERSION : "0.0.1"
    };
    
    
    if(global.hector){
        throw new Error("WTF!!! hector has already been defined");
    }
    else{
        global.hector = hector;
    }
    
})(typeof window === "undefined" ? this : window);