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

    let today = new Date(this.props.itemBirthTime);
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //  1월은 0으로나옴
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    today = `${mm}-${dd} ${hours}:${minutes}`;

    return (
      <div className={statusClassname}>
        <p className="card-title">{this.props.itemTitle}</p>
        <p className="card-content">{this.props.itemContent}</p>
        <p className="card-timestamp">{today}</p>
      </div>
    );
  }
}

CardComponent.propTypes = {
  itemCompleted: React.PropTypes.bool.isRequired,
  itemType: React.PropTypes.oneOf(['improvement', 'defect']).isRequired,
  itemTitle: React.PropTypes.string.isRequired,
  itemContent: React.PropTypes.string.isRequired,
  itemBirthTime: React.PropTypes.number.isRequired,
};
