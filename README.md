Precised.js
======

JS is very comfortable language for coding. I really like it and think you too :)  
But all of us have issues and JS isn\'t exception.  
I\'ll try to give solutions for some annoying issues of JS and make my and your life a bit easier.  

Goals:
- decimal arithmetic
- decimal truncation
- decimal formatting (Bonus)

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
Voila  

| [x] |    Operation   |   Method   |
|:---:|:---------------|:-----------|
| [ ] | Addition       | (a).add(b) |
| [ ] | Subtraction    | (a).sub(b) |
| [ ] | Multiplication | (a).mul(b) |
| [ ] | Division       | (a).div(b) |

Truncation
---

- [ ] Return precised decimal without rounding  | (x).precise(n)  
Issue:  
> `100.00067.toFixed(4)` give us `100.0007`  
  
Goal:  
> Decimal `100.00067` precised to `4` digits after dot should be `100.0006`  

Formatting
---

To be continue...
