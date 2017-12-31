import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class AddSong extends React.Component {

  @observable inputText = ''

  handleSubmit = (e) => {
    e.preventDefault()
    const { store } = this.props
    store.songs.add(this.inputText).then(() => {
      // Clear input text on sucess
      this.inputText = ''
    })
  }

  handleChange = (e) => {
    this.inputText = e.target.value
  }

  render() {
    return (
      <form className="header" onSubmit={this.handleSubmit}>
        <p>
          <input
            type="text"
            className="new-item"
            placeholder="Add a new song"
            value={this.inputText}
            onChange={this.handleChange}
          />
        </p>
      </form>
    )
  }
}

export default AddSong
