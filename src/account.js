import { define, property, store, html } from 'hybrids';
import { Account, AccountBalanceHistory } from './schema/accounts.js';
import './atoms/mutez.js'

import 'carbon-web-components/es/components/tile/tile.js';
import './graph.js';

define({
  tag: "tzp-account",
  address: property('tz1TmBz5CkiMrrcpxATTg1nDtd1CUoBd17DC'),
  account: store(Account, 'address'),
  balance_history: store(AccountBalanceHistory, 'address'),
  render: ({ balance_history, address, account }) => html`
    <bx-tile>
      <div>
        ${store.pending(account) && `Loading...`}
        ${store.error(account) && `Something went wrong...`}

        ${store.ready(account) && html`
          <span>${account.address}</span><div>${account.alias}</div>
          <tzp-mutez v="${account.balance}"></tzp-mutez>
        `}
      </div>
      <div>
        ${store.pending(balance_history) && `Loading...`}
        ${store.error(balance_history) && `Something went wrong...`}

        ${store.ready(balance_history) &&  html`
          <tzp-graph data="${balance_history.data}"></tzp-graph>
        `}
      </div>
    </bx-tile>
    `
});
