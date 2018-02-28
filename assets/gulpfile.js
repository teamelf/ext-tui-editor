/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const gulp = require('teamelf-gulp');

gulp({
  files: [
    // './bower_components/jquery/dist/jquery.js',
    './bower_components/markdown-it/dist/markdown-it.js',
    './bower_components/to-mark/dist/to-mark.js',
    './bower_components/tui-code-snippet/dist/tui-code-snippet.js',
    './bower_components/codemirror/lib/codemirror.js',
    './bower_components/highlightjs/highlight.pack.js',
    './bower_components/squire-rte/build/squire-raw.js',
    './bower_components/tui-editor/dist/tui-editor-Editor.js',
    // './bower_components/tui-editor/dist/tui-editor-Editor-all.js'
  ],
  modules: {
    'teamelf/tui-editor': './js/**/*.js'
  },
  output: './dist/tui-editor.js'
}, {
  files: [
    './bower_components/codemirror/lib/codemirror.css',
    './bower_components/tui-editor/dist/tui-editor.css',
    './bower_components/tui-editor/dist/tui-editor-contents.css',
    './bower_components/highlight.js/styles/github.css'
  ],
  modules: [
    './less/**/*.less'
  ],
  output: './dist/tui-editor.css'
});
