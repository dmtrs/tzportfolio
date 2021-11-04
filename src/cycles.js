import { define, store, html, property } from 'hybrids';
import moment from 'moment';

import { Cycle } from './schema/cycles.js';

let _observe_index = (host, value) => {
  console.log(host.index, host.cycle);
};

define({
  tag: "tzp-cycles",
  index: property(0), // null, _observe_index), Cycle index starting from zero
  cycle: store(Cycle, 'index'),
  render: (host) => html`
    <div>
      ${ html.resolve(
        fetch('https://api.tzkt.io/v1/cycles/count')
          .then(r=>r.json())
          .then(i=>parseInt(i))
          .then(current=>{
            host.index = current - 1;
            return `current ○ ${current}`;
          })
        )
      }
      ${store.pending(host.cycle) && `Loading...`}
      ${store.error(host.cycle) && `Something went wrong...`}

      ${store.ready(host.cycle) && html`
        end ${moment(host.cycle.endTime).fromNow()} ${host.cycle.lastLevel}`
      }
    </div>`
});
