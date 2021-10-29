import { define, store, html } from 'hybrids';
import { Account, AccountBalanceHistory } from './schema/accounts.js';
import './atoms/mutez.js'

import './graph.js';

define({
  tag: "tzp-account",
  address: 'tz1TmBz5CkiMrrcpxATTg1nDtd1CUoBd17DC',
  account: store(Account, 'address'),
  balance_history: store(AccountBalanceHistory, 'address'),
  render: ({ account, balance_history }) => html`
    <div>
      ${store.pending(account) && `Loading...`}
      ${store.error(account) && `Something went wrong...`}

      ${store.ready(account) && html`
        <p>${account.address} ${account.alias} <tzp-mutez v="${account.balance}"></tzp-mutez></p>
      `}
    </div>
    <div>
      ${store.pending(balance_history) && `Loading...`}
      ${store.error(balance_history) && `Something went wrong...`}

      ${store.ready(balance_history) &&  html`
        <tzp-graph data="${balance_history.data}"></tzp-graph>
      `}
    </div>
  `,
});

