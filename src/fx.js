import { define, store, html } from 'hybrids';
import { QuoteHistory } from './schema/quotes.js';

import 'carbon-web-components/es/components/tile/tile.js';
import './graph.js';

define({
  tag: "tzp-fx",
  currency: 'eur',
  quotes: store(QuoteHistory, 'currency'),
  render: ({ quotes }) => html`
    ${store.pending(quotes) && `Loading...`}
    ${store.error(quotes) && `Something went wrong...`}

    ${store.ready(quotes) &&  html`
      <tzp-graph data="${quotes.data}" y="rate"></tzp-graph>
    `}
    <style>
    :host tzp-graph {
      display: block;
    }
  `,
});

