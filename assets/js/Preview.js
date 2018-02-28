/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class extends React.Component {
  render () {
    return <div ref={(wrapper) => { this.wrapper = wrapper; }}/>;
  }
  componentDidMount () {
    this.editor = new tui.Editor.factory({
      el: this.wrapper,
      viewer: true,
      height: 'auto',
      initialValue: this.props.value
    });
  }
  componentDidUpdate () {
    if (this.editor) {
      this.editor.setMarkdown(this.props.value);
    }
  }
}
