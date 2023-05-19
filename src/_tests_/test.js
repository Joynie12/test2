import { sortHeroesByHealth } from '../function';

// eslint-disable-next-line no-undef
test('sorts heroes by health in descending order', () => {
  const heroes = [    {name: 'мечник', health: 10},    {name: 'маг', health: 100},    {name: 'лучник', health: 80},  ];
  const expected = [    {name: 'маг', health: 100},    {name: 'лучник', health: 80},    {name: 'мечник', health: 10},  ];
  // eslint-disable-next-line no-undef
  expect(sortHeroesByHealth(heroes)).toEqual(expected);
});