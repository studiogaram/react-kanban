import React from 'react';
export default class ButtonComponent extends React.Component {
  render() {
    let stateClassname = 'btn ';

    if (this.props.state === 'primary') {
      stateClassname += 'btn-primary ';
    } else {
      stateClassname += 'btn-default ';
    }
    return (
      <button
        onClick={this.props.onClick}
        className={stateClassname}
      >
        {this.props.text}
      </button>
    );
  }
}

ButtonComponent.propTypes = {
  state: React.PropTypes.oneOf(['default', 'primary']).isRequired,
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};
