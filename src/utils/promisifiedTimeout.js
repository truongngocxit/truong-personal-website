export default function promisifiedTimeout(secs = 2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, secs * 1000);
  });
}
