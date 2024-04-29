let userProfile = (function(){
    let name ="Ali";
    let age = 23; 

    return {
        displayInfo: function(){
           console.log(`Name: ${name}, Age: ${age}`);
            
           
        }
    }
})();

userProfile.displayInfo()