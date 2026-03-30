import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { readFileSync } from 'node:fs';

const japlGrammar = JSON.parse(
  readFileSync(new URL('./src/grammars/japl.tmLanguage.json', import.meta.url), 'utf-8')
);

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: [japlGrammar],
    },
  },
  site: 'https://japl-lang.dev',
});
