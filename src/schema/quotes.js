import { store } from 'hybrids';

const _get_quotes = () => new Promise((res, rej) => {
  return fetch(`https://api.tzkt.io/v1/quotes?limit=100`)
    .then(res=>res.json())
    .then(res)
    .catch(rej);
});

const _get_quotes_for = base => {
  if (base != 'eur') {
    throw new Error('Unsupported currency');
  }

  return _get_quotes()
    .then(data => data.map(({ timestamp, eur }) => ({ base, timestamp, rate: eur })));
};

export const QuoteHistory = {
  id: true,
  data: '',
  [store.connect]: {
    get: base => _get_quotes_for(base).then(data => ({ base, data: JSON.stringify(data) }))
  },
};
