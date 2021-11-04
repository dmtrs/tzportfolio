import { store } from 'hybrids';

export const Cycle = {
  id: true,
  index: 0,
  firstLevel: 1,
  lastLevel: 4096,
  startTime: "2018-06-30T17:39:57Z",
  endTime: "2018-07-03T14:16:12Z",
  /**
  snapshotIndex: 0,
  snapshotLevel: 1,
  randomSeed: "0e5751c026e543b2e8ab2eb06099daa1d1e5df47778f7787faab45cdf12fe3a8",
  totalBakers: 8,
  totalRolls: 15280,
  totalStaking: 152863719602528,
  totalDelegators: 32,
  totalDelegated: 152863719602520,
  **/
  [store.connect]: {
    get: index => fetch(`https://api.tzkt.io/v1/cycles/${index}`)
    .then(res=>res.json())
  },
};
