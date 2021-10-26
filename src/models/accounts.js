import { store } from 'hybrids';

export const Account = {
  id: true,
  address: '',
  alias: '',
  balance: 0,
  [store.connect]: {
    get: address => fetch(`https://api.tzkt.io/v1/accounts/${address}`)
      .then(res=>res.json())
      .then(({ address, balance, alias }) => new Promise((res, rej) => {
        res({
          address,
          balance,
          alias,
        })
      }))
  },
};
