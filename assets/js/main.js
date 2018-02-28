/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Editor from 'teamelf/common/Editor';
import TuiEditor from 'teamelf/tui-editor/Editor';
import TuiPreview from 'teamelf/tui-editor/Preview';

Editor.prototype.editor = (value, onChange) => (
  <TuiEditor
    value={value}
    onChange={onChange}
  />
);

Editor.prototype.preview = (value) => (
  <TuiPreview
    value={value}
  />
);
