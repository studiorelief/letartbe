import './index.css';

import { darkModeContent } from '$utils/darkmode';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
  ]);

  darkModeContent();
  toggleSize();
});
