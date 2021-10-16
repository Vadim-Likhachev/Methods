/* eslint-disable no-undef */
import Character from '../js/Character';

test('Количество символов в имени менее 2', () => {
  expect(() => {
    const result = new Character('11', 'Daemon');
    return result;
  }).toThrow();
});

test('Количество символов в имени более 10', () => {
  expect(() => {
    const result = new Character('11111111111111111111', 'Swordsman');
    return result;
  }).toThrow();
});

test('Имя не является строкой', () => {
  expect(() => {
    const result = new Character(1234, 'Undead');
    return result;
  }).toThrow();
});
