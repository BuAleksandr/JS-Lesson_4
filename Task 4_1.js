function getPasswordChecker(password) {
    return function(Check){
        if (Check === password) {
            return true;
        }
        return false;
    }
}

function testPassword(choice, Pass, expected) {
    if(choice(Pass) !== expected) {
        console.log("test failed") 
    }   else {
            console.log("tests successful")
        }
    
}

 function main() {
    let choice = getPasswordChecker("778899");
    testPassword(choice, "ahbdser541", false);
    testPassword(choice, "pass", false);
    testPassword(choice, "778899", true);
}
 
main();