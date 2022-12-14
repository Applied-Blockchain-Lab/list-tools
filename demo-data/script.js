import fs from "fs";
import { faker } from "@faker-js/faker";
import _ from "lodash";

for (let i = 0; i < 3; ++i) {
  const randomData = [];

  const randomDateArr = [faker.date.recent(), faker.date.soon(), faker.date.future()];
  const randomBoolArr = [_.sample([true, false]), _.sample([true, false]), _.sample([true, false])];
  const randomStrArr = [faker.color.human(), faker.color.human(), faker.color.human()];
  const randomIntArr = [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()];

  for (let j = 0; j < Math.random() * (50 - 30) + 30; ++j) {
    const randomObj = {
      L11: faker.datatype.number(),
      L12: {
        L21: faker.address.country(),
        L22: faker.date.recent(),
        L23: {
          L31: faker.address.city(),
          L32: _.sample([true, false]),
          L33: randomStrArr,
          L34: randomDateArr,
          L35: randomBoolArr,
          L36: randomIntArr,
        },
      },
    };

    randomData.push(randomObj);
  }

  fs.writeFileSync(`./demo-data/demoData${i}.json`, JSON.stringify(randomData));
}
