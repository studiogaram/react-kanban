import React from 'react';
export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusClassname: 'card',
    };
  }

  render() {
    let statusClassname = 'card ';
    if (this.props.itemCompleted) {
      statusClassname += 'card-completed ';
    }
    if (this.props.itemType === 'improvement') {
      statusClassname += 'card-type-improvement ';
    } else if (this.props.itemType === 'defect') {
      statusClassname += 'card-type-defect ';
    }
    return (
      <div className={statusClassname}>
        <p className="card-title">{this.props.itemTitle}</p>
        <p className="card-content">{this.props.itemContent}</p>
        <p className="card-timestamp">{this.props.itemBirthTime}</p>
      </div>
    );
  }
}

CardComponent.propTypes = {
  itemCompleted: React.PropTypes.bool.isRequired,
  itemType: React.PropTypes.oneOf(['improvement', 'defect']).isRequired,
  itemTitle: React.PropTypes.string.isRequired,
  itemContent: React.PropTypes.string.isRequired,
  itemBirthTime: React.PropTypes.string.isRequired,
};
