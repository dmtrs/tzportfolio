import { store } from 'hybrids';

const _get_block_count = () => fetch('https://api.tzkt.io/v1/blocks/count')
  .then(r=> r.json())
  .then(level=>({level}));

export const Block = {
  level: 0,
  [store.connect]: {
    get: _get_block_count,
  },
};
