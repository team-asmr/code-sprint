const snippet =
`function fibonacci(num) {
  if (num < 2) return 1;
  return fibonacci(num-2) + fibonacci(num-1);
}`;

export default snippet;