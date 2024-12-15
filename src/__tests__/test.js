import {Team} from '../team';

test("cheking team", () => {
    const char = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      }

      const team = new Team();
      team.add(char);
      let v = () => {
      for(let value of team) {
        return value;
      }
    }
      expect(v()).toEqual({name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10});
})