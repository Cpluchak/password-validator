


function checkForLowerCase(password){
    for (var i = 0; i < password.length; i++){
        if (password[i] >= "a" && password[i] <="z"){
            return true
        }
    }return false}

function checkForLength(password){
    if (password.length < 8) {
        return false
    }
    return true
}

function checkForUpperCase(password) {
    for (var i = 0; i < password.length; i++){
        if (password[i] >= "A" && password[i] <="Z"){
            return true
        }
    }
    return false
}


function checkForNumber(password) {
    for (var i = 0; i < password.length; i++){
        if (password[i] >= 0 && password[i] <= 9){
            return true
        }
    }
    return false
}

function checkSpecialCharacter(password) {
    var specialcharacters ="!@#$%^&*()-_"
    for (var i = 0; i < password.length; i++){
        if (specialcharacters.includes(password[i])){
            return true
        }
    }
    return false
    }

    function validatePassword(password) {
    let lowerCase = false
let passwordLength = false
let upperCase = false
let checkNumber = false
let checkCharacter = false
    passwordLength = checkForLength(password)
    lowerCase = checkForLowerCase(password)
    upperCase = checkForUpperCase(password)
    checkNumber = checkForNumber(password)
    checkCharacter = checkSpecialCharacter(password)
    return lowerCase && passwordLength && upperCase && checkNumber && checkCharacter
}
module.exports=validatePassword


