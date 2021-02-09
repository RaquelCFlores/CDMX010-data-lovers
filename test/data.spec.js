//import { example, anotherExample } from '../src/data.js';
import { filterData, sortData, sortDataAZ, orderRandom } from '../src/data.js';
import data from '../src/data/lol/lol.js';

const champions = Object.values(data.data);

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns an array of assassin champions  when the provided filter is assassin', () => {
    const assassin = filterData(champions, 'Assassin')
    expect(assassin.length).toBe(33);
  });

  it('returns an array of fighter champions  when the provided filter is fighter', () => {
    const fighter = filterData(champions,'Fighter')
    expect(fighter.length).toBe(66);
  });

  it('returns an array of mage champions  when the provided filter is mage', () => {
    const mage = filterData(champions,'Mage')
    expect(mage.length).toBe(52);
  });

  it('returns an array of marksman champions  when the provided filter is marksman', () => {
    const marksman = filterData(champions,'Marksman')
    expect(marksman.length).toBe(24);
  });

  it('returns an array of support champions  when the provided filter is support', () => {
    const support = filterData(champions,'Support')
    expect(support.length).toBe(27);
  });

  it('returns an array of tank champions  when the provided filter is tank', () => {
    const tank = filterData(champions,'Tank')
    expect(tank.length).toBe(40);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns an array of champions sorted from Z to A when the provided filter is sort Z- A', () => {
    const filterZA = sortData(champions)
    expect(filterZA.length).toBe(134);
  });
});

describe('sortDataAZ', () => {
  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function');
  });

  it('returns an array of champions sorted from A to Z when the provided filter is sort A-Z', () => {
    const filterAZ = sortDataAZ(champions)
    expect(filterAZ.length).toBe(134);
  });
});

describe('orderRandom', () => {
  it('is a function', () => {
    expect(typeof orderRandom).toBe('function');
  });

  it('returns an array of champions sorted randomly when the provided filter is sort random', () => {
    const ordRandom = orderRandom(champions)
    expect(ordRandom.length).toBe(134);
  });
});