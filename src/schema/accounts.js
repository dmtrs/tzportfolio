import { store } from 'hybrids';

const _local_cache = (key, fn) => address => new Promise((res, rej) => {
  const _id = `${key}:${address}`;
  let account = localStorage.getItem(_id);
  if (!account) {
    return fn(address).then(account => {
      res(account);
      localStorage.setItem(_id, JSON.stringify(account));
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

const _get_balance_history = address => new Promise((res, rej) => {
  return fetch(`https://api.tzkt.io/v1/accounts/${address}/balance_history`)
    .then(res=>res.json())
    .then(data => {
      res({ data: JSON.stringify(data) })
    })
    .catch(rej);
});

export const Account = {
  id: true,
  address: '',
  alias: '',
  balance: 0,
  [store.connect]: {
    get: _local_cache('accounts', _get),
  },
};

export const AccountBalanceHistory = {
  id: true,
  data: '',
  [store.connect]: {
    get: _get_balance_history,
  },
};
