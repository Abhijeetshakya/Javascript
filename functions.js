// IIFE counter module 


 counterModule = (function(){
    let count = 3 ;
    function increament(){
        count++ ; 
    }
    let getValue = () => count ; 
    return {
        increament : increament , 
        getValue : getValue
    } ; 
})() ; 
counterModule.increament() ; 
console.log(counterModule.getValue())
console.log(counterModule.count) ; 


 // IIFE config manager 


 configManager = (function(){
    let settings  = {
        theme : 'dark' , 
        language : 'en'
    } ; 
    function get(key){
        return settings[key] ; 
    }
    function set(key , value ){
        settings[key] = value ; 
    }
    return {
        set : set , 
        get : get 
    }
 })() ; 
console.log(configManager.get('theme'));    // Should print: 'dark'

configManager.set('username', 'js_master');
console.log(configManager.get('username')); // Should print: 'js_master'

// This should prove the settings object is private
console.log(configManager.settings); 

// FINAL CHALLENGE: The Data Analyzer Module 

dataAnalyzer = (function(){
    let data = [] ; 
    function add(...strings){
        strings.forEach(function(s){
            data.push(s.trim()); 
        }) ; 
        
    }
    function getSummary(){
        return {
            totalCount : data.length,
            allCaps : data.map(s=>s.toUpperCase()) , 
            longStrings :data.filter(s=> s.length > 5)
        }
    }
    return {
        add : add , 
        getSummary: getSummary
    }
})() ; 
dataAnalyzer.add("  Apple ", "Banana", "Fig", "  grape  ", "Cherry");
dataAnalyzer.add("Date");

const summary = dataAnalyzer.getSummary();
console.log(summary);
