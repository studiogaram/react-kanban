import React from 'react';
export default class ButtonComponent extends React.Component {
  render() {
    let stateClassname = 'btn ';

    if (this.props.state === 'primary') {
      stateClassname += 'btn-primary ';
    } else if (this.props.state === 'list') {
      stateClassname += 'btn-list';
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
  state: React.PropTypes.oneOf(['default', 'primary', 'list']).isRequired,
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};
