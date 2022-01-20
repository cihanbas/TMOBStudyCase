import {expectedFormValues, applicationData} from './constants';
test('applicationData is equal expectedFormValues ', () => {
  expect(normalize(applicationData)).toEqual(expectedFormValues);
});
const normalize = list => {
  const items = {};
  for (const [key, value] of Object.entries(list)) {
    if (Array.isArray(value.value)) {
      const valueArray = [];
      value.value.forEach(item => {
        const normalizedValue = normalize(item);
        valueArray.push(normalizedValue);
      });
      items[key] = valueArray;
    } else {
      items[key] = value.value;
    }
  }
  return items;
};
