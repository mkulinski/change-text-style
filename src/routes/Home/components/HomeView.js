import React, { Component } from 'react'
import './HomeView.scss'
import { Editor, EditorState, RichUtils } from 'draft-js'

class HomeView extends Component {
  constructor () {
    super()
    this.state = {
      editorState: EditorState.createEmpty(),
      editorState2: EditorState.createEmpty(),
      focus: '',
    }
  }

  onFocus = (focus) => {
    this.setState({ focus })
  }

  onChange = (newState, id) => {
    this.setState({ [id]: newState })
  }

  onBoldClick = () => {
    const stateToChange = this.state[this.state.focus]
    const newState = RichUtils.toggleInlineStyle(stateToChange, 'BOLD')
    this.onChange(newState, this.state.focus)
  }

  onItalicClick = () => {
    const stateToChange = this.state[this.state.focus]
    const newState = RichUtils.toggleInlineStyle(stateToChange, 'ITALIC')
    this.onChange(newState, this.state.focus)
  }

  render () {
    return (
      <div>
        <button onClick={this.onBoldClick}>Bold</button>
        <button onClick={this.onItalicClick}>Italic</button>
        <Editor
          id={'editorState'}
          editorState={this.state.editorState}
          onChange={(newState) => this.onChange(newState, 'editorState')}
          onFocus={() => this.onFocus('editorState')}
          className='editor'
        />
        <Editor
          id={'editorState2'}
          editorState={this.state.editorState2}
          onChange={(newState) => this.onChange(newState, 'editorState2')}
          onFocus={() => this.onFocus('editorState2')}
          className='editor'
        />
      </div>
    )
  }
}

HomeView.propTypes = {
}

export default HomeView
