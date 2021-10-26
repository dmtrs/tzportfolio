import { html, define, property } from 'hybrids';
import './footer.js'

define({
  tag: "tzp-app",
  render: ({}) => html`
    <header>
      <h1>tzportfolio</h1>
    </header>
    <section>
      <article>
      </article>
    </section>
    <hr/>
    <tzp-footer></tzp-footer>
  `,
});
