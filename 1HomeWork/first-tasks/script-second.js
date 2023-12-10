let gb = +prompt('Enter ur flash drive storage');
const file = 820;

gb *= 1024;
gb = gb / file;

console.log(`${Math.trunc(gb)} files has been downloaded`);

