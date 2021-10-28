export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;

    if ((typeof name !== 'string' || name.length < 2 || name.length > 10)) {
      throw new Error('Ошибка! Некорректные данные');
    } else {
      this.name = name;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.deffence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.deffence / 100);
    } else {
      this.health = 0;
    }
  }
}
