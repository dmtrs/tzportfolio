import { define, store, html } from 'hybrids';

define({
  tag: "tzp-cycles",
  render: ({}) => html`
    <span>○ ${html.resolve(fetch('https://api.tzkt.io/v1/cycles/count').then(r=>r.json()))}</span>
  `,
});

