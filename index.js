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
module.exports = validatePassword
