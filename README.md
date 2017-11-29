# num-plus

num-plus is an extension of the [num](https://github.com/defunctzombie/num) library by Roman Shtylman.
It adds several additional functions for convenience.

## Additional Functions

### floor(precision)
Returns a copy of the number, rounded down to the nearest decimal, as specified by {precision}.
Please note that numbers are *always* rounded down - this includes negative numbers.
This functionality was designed to match the [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) function.

> num(1.2345).floor(3) => 1.234
> num(-1.2345).floor(3) => -1.235

### ceil(precision)
Returns a copy of the number, rounded up to the nearest decimal, as specified by {precision}.
Please note that numbers are *always* rounded up - this includes negative numbers.
This functionality was designed to match the [Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) function.

> num(1.2345).floor(3) => 1.235
> num(-1.2345).floor(3) => -1.234
