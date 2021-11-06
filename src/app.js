import { html, define, property } from 'hybrids';


import globals from 'carbon-components/css/carbon-components.css';
import 'carbon-web-components/es/components/ui-shell/side-nav.js';

import styles from './_app.css';

import './account.js';
import './block.js';
import './cycles.js';
import './fx.js';


import './header.js';
import './footer.js';

define({
  tag: "tzp-side-nav",
  render: ({}) => html`
    <aside>
      <tzp-cycles></tzp-cycles>
      <tzp-block></tzp-block>
    </aside>
  `
})

define({
  tag: "tzp-layout",
  render: ({})=> html`
    <div class="main-container bx--grid">
      <div class="bx--row">
        <div class="bx--col-lg-8">
          <div class="bx-row bx--mt-5">
            <tzp-account></tzp-account>
          </div>
          <div class="bx-row bx--mt-5">
            <tzp-account></tzp-account>
          </div>
        </div>
        <div class="bx--col-lg-4 bx--grid bx--grid--narrow">
          <div class="bx--row">
            <h1>FX</h1>
          </div>
          <div class="bx--row">
          </div>
          <div class="bx--row bx--aspect-ratio bx--aspect-ratio--16x9">
            <tzp-fx class="bx--aspect-ratio--object bx--col"></tzp-fx>
          </div>
        </div>
      </div>
    </div>
  `.style(globals, styles),
});


define({
  tag: "tzp-app",
  render: ({}) => html`
    <tzp-header></tzp-header>
    <tzp-layout></tzp-layout>
    <tzp-footer></tzp-footer>
  `
});
