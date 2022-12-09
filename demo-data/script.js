const fs = require("fs");
const faker = require("@faker-js/faker").faker;
const _ = require("lodash");

for (let i = 0; i < 3; ++i) {
  const randomData = [];

  const randomDateArr = [faker.date.recent(), faker.date.soon(), faker.date.future()];
  const randomBoolArr = [_.sample([true, false]), _.sample([true, false]), _.sample([true, false])];

  for (let j = 0; j < Math.random() * (50 - 30) + 30; ++j) {
    const randomObj = {
      L11: faker.datatype.number(),
      L12: {
        L21: faker.address.country(),
        L22: faker.date.recent(),
        L23: {
          L31: faker.address.city(),
          L32: _.sample([true, false]),
          L33: faker.datatype.array(3),
          L34: randomDateArr,
          L35: randomBoolArr,
        },
      },
    };

    randomData.push(randomObj);
  }

  fs.writeFileSync(`./demo-data/demoData${i}.json`, JSON.stringify(randomData));
}
