import getLevel from '../app';
import fetchData from '../http';


jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return correct user level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 80 });
  const expected = 'Ваш текущий уровень: 80';
  const received = getLevel('randomid');
  expect(received).toBe(expected);
});

test('should return error if level data not fetched', () => {
  fetchData.mockReturnValue({ status: 'err' });
  const expected = 'Информация об уровне временно недоступна';
  const received = getLevel('randomid');
  expect(received).toBe(expected);
});
