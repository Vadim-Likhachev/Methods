/* eslint-disable no-undef */
import Character from '../js/Character';

test('Количество символов в имени менее 2', () => {
  expect(() => {
    const result = new Character('1', 'Daemon');
    return result;
  }).toThrow('Ошибка! Некорректные данные');
});

test('Количество символов в имени более 10', () => {
  expect(() => {
    const result = new Character('11111111111111111111', 'Swordsman');
    return result;
  }).toThrow('Ошибка! Некорректные данные');
});

test('Имя не является строкой', () => {
  expect(() => {
    const result = new Character(1234, 'Undead');
    return result;
  }).toThrow('Ошибка! Некорректные данные');
});
