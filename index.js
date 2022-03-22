const names = require("./names.json");

const getRandomName = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = getRandomNameSync();
      resolve(name);
    }, 1000);
  });
};
const getRandomNameSync = () => {
  const firstName = names.first[Math.floor(Math.random() * names.first.length)];
  const lastName = names.last[Math.floor(Math.random() * names.last.length)];
  const name = `${firstName} ${lastName}`;
  return name;
};

module.exports = { getRandomName, getRandomNameSync };
