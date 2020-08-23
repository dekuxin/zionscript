
/**
 * @function  Returns a random string
 * @param {number} length Optional parameter to specifie the length of you random string, default: 10 
 * @param {string} characters Optional parameter to specifie the characters that you want 
 */

function randStr(length, characters) {
    let result = "";
    let char = characters ? characters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.!&$+_-?'
    let lengthOfString = length ? length : 10
    if(typeof lengthOfString != "number" || lengthOfString <= 0 || lengthOfString / Math.floor(lengthOfString) != 1) return new SyntaxError("Length of the string must be a positive none float number")
    if(typeof char != "string") return new SyntaxError(`${length} must be a string.`)
    if(char.includes("\n")) new SyntaxError("Characters should not contains '\n'")
    for(let i = 0; i < lengthOfString; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length))
    }
    return result
}

/**
 * @function Returns a random word in from the array
 * @param {array} words Parameter words should be in an array
 */
function randWord(words) {
    if(Array.isArray(words) === false) return new SyntaxError(`${words} is not an array`)
    else if(words.length <= 1) return new SyntaxError(`Missing items in array`)
    return words[Math.floor(Math.random() * words.length)]
}

/**
 * @function Returns a random number between min and max
 * @param {number} min Minimum number 
 * @param {number} max Maximum number
 */
function intIn(min, max) {
    if(typeof(min) != "number") return new SyntaxError("Parameter 'min' must be a number")
    else if(typeof(max) != "number") return new SyntaxError("Parameter 'max' must be a number")
    else if(max < min) return new SyntaxError("Max number is not bigger than minimum number")
    return Math.random() * (max - min + 1) + min
}

module.exports.randomString = randStr
module.exports.randomWord = randWord
module.exports.intIn = intIn