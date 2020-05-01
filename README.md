Precised.js
======

JS is very comfortable language for coding. I really like it and think you too :)  
But all of us have issues and JS isn\'t an exception.  
I\'ll try to give solutions for some annoying issues of JS and make my and your life a bit easier.  

Features
---

- Arithmetic
- Truncation
- Formatting

Run tests
---

```sh
yarn install  
```
_`yarn test src` to run all tests_  
OR  
_`yarn test src/test/precise.test.js` to run specific test file_  
  
Arithmetic
---
JS has wrong calculations. Why `0.2 + 0.1` gives us `0.30000000000000004`?.  
You can find answer here: https://floating-point-gui.de/basic/.  
Even though JS isn\`t accurate in float numbers, it is good in integers and we can use this fact.  
So idea of **Precised.js** is simple.  
1. Take two float numbers.
2. Transform them to integers.
3. Do calculation
4. Transform back  

| [x] |    Operation   |   Method   |
|:---:|:---------------|:-----------|
| [ ] | Addition       | (a).add(b) |
| [ ] | Subtraction    | (a).sub(b) |
| [ ] | Multiplication | (a).mul(b) |
| [ ] | Division       | (a).div(b) |

Truncation
---
Another problem is numbers truncation. Example: `100.00067.toFixed(4)` gives `100.0007`.  
Expectation: `100.00067` precised to `4` digits after dot should be `100.0006`.  
JS uses banker\`s rounding for numbers. Details here: https://floating-point-gui.de/errors/rounding/.
Let`s describe easy way to keep numbers always rounded down.
1. Convert float number to "string" type
2. Cut as many characters as you need OR add trailing zeros  
  
| [x] |   Operation   |     Method     |
|:---:|:--------------|:---------------|
| [x] | Precising     | (a).precise(n) | 
  
WARNING!
---
**Precised.js** doesn\'t work well with numbers containing more than **16** characters **in sum** (numerical digits). This also applies to decimal places.  
  
*JavaScript uses 64 bit floating point numbers exclusively, which means you only get about 16 decimal digits of precision. This is a fundamental limitation of the number type.*  
  
This means that for correct calculations your number should contain less than 16 characters (before and after dot together).  

Formatting
---
Another feature is formatting numbers. To present ```10040008.10005``` as ```10 040 008,10005``` we need just to apply *.format()* method  
```new Precised(10040008.10005).format(" ", ",")```  

Todo
---

Arithmetic  
- all methods :)  
  
Truncation    
- Pass custom decimal separator as parameter  
- Pass thousands separator as parameter  

