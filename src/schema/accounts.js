import { store } from 'hybrids';

const _local_cache = fn => address => new Promise((res, rej) => {
  let account = localStorage.getItem(`account:${address}`);
  //fetch(`https://api.tzkt.io/v1/accounts/${address}/counter`).then(res=>res.json()).then(console.log);
  if (!account) {
    return fn(address).then(account => {
      res(account);
      localStorage.setItem(`account:${address}`, JSON.stringify(account));
    }).catch(rej)
  }
  return res(JSON.parse(account))
});

const _get = address => new Promise((res, rej) => {
  return fetch(`https://api.tzkt.io/v1/accounts/${address}`)
    .then(res=>res.json())
    .then(({ address, balance, alias }) => {
      res({
        address,
        balance,
        alias,
      });
    })
    .catch(rej);
});

export const Account = {
  id: true,
  address: '',
  alias: '',
  balance: 0,
  [store.connect]: {
    get: _local_cache(_get),
  },
};
