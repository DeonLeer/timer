for (let num in process.argv.slice(2)) {
  if (num > 0 && !isNaN(num)) {
  setTimeout(() => process.stdout.write('\x07'), num*1000)
  };
};

