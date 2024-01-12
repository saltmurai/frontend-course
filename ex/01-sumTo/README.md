## JavaScript Exercise: Sum from 1 to n

### Part 1 - Function with Type Checking:

- Create `sumTo(n)` to calculate the sum from 1 to `n`.
- Ensure n is a positive integer; otherwise, return an error message.
- Implement using a for-loop, and using the formula (n * (n + 1)) / 2.


### Part 2 - User Interface:

- Build an HTML page with a text input for n.
- Include a button to calculate the sum.
- Display results in a designated area.
- Connect UI and sumTo function with JavaScript.


### Test Cases:
- Input: 5; Expected: 15.
- Input: 0; Expected: Error message.
- Input: -3; Expected: Error message.
- Input: 4.5; Expected: Error message. (Hint: Use `Number.isInterger()` to check if it's interger)
- Input: "test"; Expected: Error message.
- Input: 10000; Expected: Valid sum.