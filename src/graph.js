import { html, define, property } from 'hybrids';
import * as Plot from "@observablehq/plot";

import { transform_date, transform_mutez } from './utils.js';

define({
  tag: "tzp-graph",
  data: property(),
  render: ({ data }) => {
    console.log(data);
    return html`
      <div>
      ${Plot.plot({
        // width: 1424,
        x: {
          transform: transform_date,
        },
        y: {
          transform: f => Number(transform_mutez(f)/1000000),
          nice: true,
        },
        marks: [
          Plot.line(JSON.parse(data), {x: "timestamp", y: "balance"}),
        ]
      })}
      </div>
    `;
  }
});
