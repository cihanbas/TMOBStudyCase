import {normalize} from './helper';
import {expectedFormValues, applicationData} from './constants';

test('applicationData is equal expectedFormValues ', () => {
  expect(normalize(applicationData)).toEqual(expectedFormValues);
});
