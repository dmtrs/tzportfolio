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
      <h1>tzportfolio
      <tzp-cycles></tzp-cycles>
      <tzp-block></tzp-block>
      </h1>
    </header>
    <section>
      <article>
        <tzp-account></tzp-account>
      </article>
      <aside>
        <tzp-fx></tzp-fx>
      </aside>
    </section>
    <hr/>
    <tzp-footer></tzp-footer>
  `,
});
