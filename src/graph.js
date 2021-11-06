import { html, define, property } from 'hybrids';
import * as Plot from "@observablehq/plot";

import { transform_date, transform_mutez } from './utils.js';

define({
  tag: "tzp-graph",
  data: property(),
  y: property('balance'),
  x: property('timestamp'),
  render: (host) => {
    const width = host.offsetParent.clientWidth;
    const height = host.offsetParent.clientHeight;
    return html`
      <div>
      ${Plot.plot({
        width,
        height,
        x: {
          transform: transform_date,
          nice: true,
        },
        y: {
          //transform: f => Number(transform_mutez(f)/1000000),
          nice: true,
          grid: true,
        },
        marks: [
          Plot.line(JSON.parse(host.data).map(i=>[i[host.x], i[host.y]])),
        ]
      })}
      </div>
    `;
  }
});
