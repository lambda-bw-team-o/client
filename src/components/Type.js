import React from 'react';
import TypeIt from 'typeit';

class Type extends React.Component {
  componentDidMount() {
    new TypeIt(this.el, this.props).go();
  }

  render() {
    return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
  }
}

export default Type;
