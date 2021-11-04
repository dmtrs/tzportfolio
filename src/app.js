import { html, define, property } from 'hybrids';

import './account.js';
import './block.js';
import './cycles.js';
import './fx.js';

import './header.js';
import './footer.js';

define({
  tag: "tzp-app",
  render: ({}) => html`
    <div class="main-container">
      <tzp-header></tzp-header>
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
    </div>
    <style>
    :host div.main-container section {
      padding-top: 3rem; /** tzp-header height **/
    }
    </style>
  `,
});
