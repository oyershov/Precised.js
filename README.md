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
You can find answer here: https://floating-point-gui.de/basic/

We need correct math!
Let\'s do it!

[-] Addition
[-] subtraction
[-] multiplication
[-] division

Truncation
---

[-] Return precised decimal without rounding
    Issue:
        `100.00067.toFixed(4)` give us `100.0007`
    Goal:
        Decimal `100.00067` precised to `4` digits after dot should be `100.0006`

Formatting
---

[-] Return
