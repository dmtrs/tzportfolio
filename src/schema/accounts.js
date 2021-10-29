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

const _get = address => fetch(`https://api.tzkt.io/v1/accounts/${address}`)
    .then(res=>res.json())
    .then(({ address, balance, alias }) => ({
        address,
        balance,
        alias,
    }));

const _get_balance_history = address => fetch(`https://api.tzkt.io/v1/accounts/${address}/balance_history`)
  .then(res=>res.json());

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
  address: '',
  data: '',
  [store.connect]: {
    get: address => _get_balance_history(address).then( data => ({
      address,
      data: JSON.stringify(data),
    }))
  },
};
