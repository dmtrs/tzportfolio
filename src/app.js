import { html, define, property } from 'hybrids';
import './account.js';
import './graph.js';
import './footer.js';

define({
  tag: "tzp-app",
  render: ({}) => html`
    <header>
      <h1>tzportfolio</h1>
    </header>
    <section>
      <article>
        <tzp-account></tzp-account>
        <tzp-graph></tzp-graph>
      </article>
    </section>
    <hr/>
    <tzp-footer></tzp-footer>
  `,
});
