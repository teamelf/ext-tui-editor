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
    // console.log(this.wrapper);
    const editor = new tui.Editor({
      el: this.wrapper,
      initialEditType: 'markdown',
      previewStyle: 'tab',
      height: '300px',
      initialValue: this.props.value,
      events: {
        change: () => {
          this.props.onChange(editor.getMarkdown());
        }
      },
      hooks: {
        addImageBlobHook (fileOrBlob, callback, source) {
          const formData = new FormData();
          formData.append('attachment', fileOrBlob);
          axios.post(`attachment`, formData).then(r => {
            callback(r.data.url);
          });
        }
      }
    });
  }
}
