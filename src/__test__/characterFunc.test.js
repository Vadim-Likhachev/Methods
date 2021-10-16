/* eslint-disable no-undef */
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Zombie from '../js/Zombie';

test('Метод levelUp должен повысить уровень на 1 и изменить  health, attack, deffence', () => {
  const recieved = new Magician('Magie', 'Magician');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Magie',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Zombie('Zomb', 'Zombie');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow(
    'Нельзя повысить левел умершего',
  );
});

test('Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, deffence', () => {
  const recieved = new Magician('Magie', 'Magician');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Magie',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Zombie('Zomb', 'Zombie');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('нельзя повысить левел умершего');
});

test('Метод damage(points) наносит урон)', () => {
  const recieved = new Bowman('Bow', 'Bowman');
  recieved.damage(1);
  const result = {
    name: 'Bow',
    type: 'Bowman',
    health: 99.1,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  expect(recieved).toEqual(result);
});

test('Метод damage(points) не должен изменять значения, если health = 0', () => {
  const recieved = new Swordsman('Swor', 'Swordsman');
  recieved.health = 0;
  const result = {
    name: 'Swor',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test('при health < 0 метод damage(points) должен уствновить health = 0', () => {
  const recieved = new Daemon('Dae', 'Daemon');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});