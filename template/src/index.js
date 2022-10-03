import Reveal from 'reveal.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/plugin/highlight/monokai.css';

const deck = new Reveal({
  hash: true,
  plugins: [Highlight],
});

deck.initialize();
