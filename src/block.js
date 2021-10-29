import { define, store, html } from 'hybrids';

define({
  tag: "tzp-block",
  render: ({}) => html`
    <span>█ ${html.resolve(fetch('https://api.tzkt.io/v1/blocks/count').then(r=>r.json()))}</span>
  `,
});

