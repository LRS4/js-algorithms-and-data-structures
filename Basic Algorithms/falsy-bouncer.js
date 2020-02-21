function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(value, index, array) {
    return Boolean(value) != false;
  });
}

bouncer([7, "ate", "", false, 9]);
