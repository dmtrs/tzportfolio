import { html, define } from 'hybrids';
import 'carbon-web-components/es/components/ui-shell/header.js';
import 'carbon-web-components/es/components/ui-shell/header-name.js';

define({
  tag: "tzp-header",
  render: ({}) => html`
    <bx-header>
      <bx-header-name prefix="ꜩ">portfolio</bx-header-name>
    </bx-header>
  `,
});
