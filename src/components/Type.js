import React from 'react';
import TypeIt from 'typeit';

class Type extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const instance = new TypeIt(this.el, this.props);
    instance.go()
  }
  
  render() {
    return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
  }
}

export default Type
