import { html, define, property } from 'hybrids';
import './account.js';
import './block.js';
import './cycles.js';
import './fx.js';
import './footer.js';

define({
  tag: "tzp-app",
  render: ({}) => html`
    <header>
      <h1>tzportfolio</h1>
      </h1>
    </header>
    <section>
      <aside>
        <tzp-cycles></tzp-cycles>
        <tzp-block></tzp-block>
      </aside>
      <article>
        <tzp-account></tzp-account>
        <tzp-fx></tzp-fx>
      </article>
    </section>
    <hr/>
    <tzp-footer></tzp-footer>
  `,
});
