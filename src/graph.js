import { html, define } from 'hybrids';
import * as Plot from "@observablehq/plot";

define({
  tag: "tzp-graph",
  render: ({ }) => {
    const aapl = [
      {date: '2007-04-23', close: 93.24},
      {date: '2007-04-24', close: 95.35}
    ]
    const plot = Plot.line(aapl, {x: "date", y: "close"}).plot();
    return html`${plot}`;
  }
});
