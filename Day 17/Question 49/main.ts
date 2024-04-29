function logHobbies (...hobbies: string[]){
        hobbies.forEach(hobby => {
            console.log(`I am very enjoying when I ${hobby}.`);
        });
    }
    logHobbies("coding", "playing criket", "writing");

