import React from 'react';

class Title extends React.Component {
  render() {
    const headline = this.props.headline;
    return (
      <h2>alo {headline}</h2>
    );
  }
}

export default Title;
