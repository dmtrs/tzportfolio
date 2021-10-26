import { define, store, html } from 'hybrids';
import { Account } from './schema/accounts.js';
import './atoms/mutez.js'

define({
  tag: "tzp-account",
  address: 'tz1TmBz5CkiMrrcpxATTg1nDtd1CUoBd17DC',
  account: store(Account, 'address'),
  render: ({ account }) => html`
    <div>
      ${store.pending(account) && `Loading...`}
      ${store.error(account) && `Something went wrong...`}

      ${store.ready(account) && html`
        <p>${account.address} ${account.alias} <tzp-mutez v="${account.balance}"></tzp-mutez></p>
      `}
    </div>
  `,
});

