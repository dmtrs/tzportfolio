import { html, define, property } from 'hybrids';

const _render = ({v}) => html`
  <span>${new Intl.NumberFormat().format(v.toFixed(6))}ꜩ</span>
`;

define({
  tag: "tzp-tez",
  v: property(Number(0)), // int64
  render: _render,
});

define({
  tag: "tzp-mutez",
  v: property(Number(0)), // int64
  render: ({v}) => _render({ v: Number(v/1000000)}),
});
