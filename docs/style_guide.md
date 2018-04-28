# JS Code Style 
The code style used for all JavaScript code throughout the project. We are using [editor config](http://editorconfig.org/) to ensure that all developers use the same editor settings. Check the link for an extension for your editor of choice. The `.editorconfig` file in the root of the repository contains the editorconfig settings.

## Indentation
All indentation will be tabs inserted as spaces (4 spaces == 1 tab).

## Naming
On the **back end** Variables and functions are in `snake_casing`:
```javascript
let major_minor = 'CS / Interpretive dance';
```

On the **front end** variables and functions are in `camelCase` starting with a lowercase letter
due to react naming conventions:
```javascript
let majorMinor = 'CS / Interpretive dance';
```

Classes are are always in `CamelCasing` and should start with a capital letter:
```javascript
class RobotArmyManager {
}
```
For react components file names are CamelCase starting with a capital letter,
otherwise all regular camelCase:

- `RobotArmyManager.js`
- `robotArmyManager.js`

Constants should be named with all caps snake casing:
```javascript
const LOG_IN = 'LOG_IN';
```

## Braces
Braces will follow the K&R approach of being on the same line.
ex:
```javascript
if(car == "Arisoa's Car") {
   console.log('That green mustang tho');
} else {
   console.log('Nice car.');
}
```

## Functions
Functions are named with camelCasing with the first letter being lowercase.

You should comment functions like the example below as well:
```javascript
/*
   Sums the two paramaters
   Params:
      a: One of the integers to sum
      b: The other integer to sum
   Returns:
      The sum of a and b
*/
function sumTwoNumbers(a, b) {
   ...
}
```
## Inline Functions & Callbacks

Use the [Arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `() => syntax` for callbacks or inline functions:
```javascript
router.get('/', (req, res, next) => {
   res.send('Hello World!');
});
```
