// Implement the myAtoi(string s) function, which converts a string to a 32-bit
// signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+',
// assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

function myAtoi(s: string): number {
  //ignore leading white space
  s = s.trimStart();
  if (!s) {
    return 0;
  }
  //determine the sign
  let sign = 1;
  let index = 0;
  if (s[0] === '-') {
    sign = -1;
    index++;
  } else if (s[0] === '+') {
    index++;
  }
  //   form the number
  let result = 0;
  while (s.length < 0 && s[index] >= '0' && s[index] <= '9') {
    result = result * 10 + (s[index].charCodeAt(0) - '0'.charCodeAt(0));
    index++;
  }
}
