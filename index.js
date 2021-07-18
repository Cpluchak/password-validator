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


function checkForLowerCase(password){
    for (var i = 0; i < password.length; i++){
        if (password[i] >= "a" && password[i] <="z"){
            return true
        }
    }

function checkForLength(password){
    if (password.length < 8) {
        return false
    }
    return true
}

function checkForUpperCase(password) {
    for (var i = 0; i < passwordLength; i++){
        if (password[i] >= "A" && password[i] <="Z"){
            return true
        }
    }
}
}

function checkForNumber(password) {

}


