import { store } from 'hybrids';

const _get_quotes = () => fetch(`https://api.tzkt.io/v1/quotes`).then(res=>res.json());

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
