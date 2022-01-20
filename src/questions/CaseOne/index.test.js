import {expectedFormValues, applicationData, normalize} from './constants';
test('applicationData is equal expectedFormValues ', () => {
  expect(normalize(applicationData)).toEqual(expectedFormValues);
});
