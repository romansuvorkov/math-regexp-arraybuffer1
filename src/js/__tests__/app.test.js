import Daemon from '../Daemon';
import Magician from '../Magician';

test('Проверка линейного падения атаки', () => {
  const received = new Magician('Ron');
  const expected = 90;
  expect(received.attack).toEqual(expected);
});

test('Проверка stoned падения атаки', () => {
  const received = new Daemon('Ronald');
  received.stoned = true;
  const expected = 85;
  expect(received.attack).toEqual(expected);
});
