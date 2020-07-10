import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {

    const cond = this.props.score === undefined

    return (
      <tr className={`RuleRow RuleRow-${ cond ? "active" : "disabled"}`} onClick={ cond ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{cond ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;