function factorialize(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialize(n - 1);
  }
}

factorialize(5); // returns 120 (5 * 4 * 3 * 2 * 1)
