# zionscript
ZionScript is a package that allows to generate random number, items...

## Download
```bash
npm install zionscript
```

## Example
```javascript
const zionscript = require("zionscript")

zionscript.randomInt(0, 1000) // A random number betwenn 0 and 1000

zionscript.randomString() // 8 random characters, parameter are optional

zionscript.randomWord([true, false, "Idk"]) // Random item between this items
```

## Current Methods

- randomInt or randInt
```javascript
zionscript.randInt(-1000, 1000) // (Required, min < max) A random number between min(-1000) and max(1000)
```

- randomString or randStr
```javascript
zionscript.randStr() // 8 random characters
zionscript.randStr(30) // (Optional) 30 random characters
zionscript.randStr(30, "1234567890") // (Optional) 30 random characters using specified characters(1234567890) 
```

- randomWord or randWord
```javascript
zionscript.randWorld(["something", number, boolean...]) // (Required; Parametre must be an array of items) Returns a random response
``` 

More feautures are coming...




