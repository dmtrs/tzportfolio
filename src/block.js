import { define, store, html } from 'hybrids';
import { Block } from './schema/block.js';

define({
  tag: "tzp-block",
  block: store(Block),
  render: ({ block }) => html`
    <span>█&nbsp;${ store.ready(block) && block.level }</span>
  `,
});

