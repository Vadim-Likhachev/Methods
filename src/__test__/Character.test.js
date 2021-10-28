/* eslint-disable no-undef */

import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('Персонаж не существует', () => {
  expect(() => {
    const result = new Character('1', 'Fairy');
    return result;
  }).toThrow('Ошибка! Некорректные данные');
});

test('new Bowman', () => {
  const recieved = new Bowman('Bow', 'Bowman');
  expect(recieved).toEqual({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('new Daemon', () => {
  const recieved = new Daemon('Dae', 'Daemon');
  expect(recieved).toEqual({
    name: 'Dae',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test('new Magician', () => {
  const recieved = new Magician('Maggie', 'Magician');
  expect(recieved).toEqual({
    name: 'Maggie',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test('new Swordsman', () => {
  const recieved = new Swordsman('Swor', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Swor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test('new Undead', () => {
  const recieved = new Undead('Under', 'Undead');
  expect(recieved).toEqual({
    name: 'Under',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
test('new Zombie', () => {
  const recieved = new Zombie('Rob', 'Zombie');
  expect(recieved).toEqual({
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
