import React, { Component } from 'react'
import WithToolTip from './WithTooltip'

class Movie extends Component {
  render() {
    return <div>Movie {this.props.showTooltip && <div>Some tooltip</div>}</div>
  }
}

export default WithToolTip(Movie)
