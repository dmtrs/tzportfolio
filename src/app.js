import { html, define, property } from 'hybrids';
import './account.js';
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
      </article>
    </section>
    <hr/>
    <tzp-footer></tzp-footer>
  `,
});
