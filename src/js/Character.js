/* eslint-disable no-plusplus */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    // eslint-disable-next-line no-unused-vars
    const typeHeroes = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if ((typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10)) {
      throw new Error('Ошибка! Некорректные данные');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
