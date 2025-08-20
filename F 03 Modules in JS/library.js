let name = "Malik Bhatti";

function greetings(name) {
    console.log(`hello ${name}!`);
}

class Test {
    constructor() {
        console.log("Constructor Method runs Automatically either Class is Exported or not!")
    }
}

export{name, greetings, Test};