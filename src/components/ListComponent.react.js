import React from 'react';
import CardComponent from './CardComponent.react';
export default class ListComponent extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>32</b> To Do
          </p>
        </div>
        <div className="list-body">
          <CardComponent
            itemCompleted={false}
            itemType={'defect'}
            itemTitle={'ISSUE-111'}
            itemContent={'Lorem ipsum dolor sit amet, consectetu.Lorem ipsum dolor sit amet, consectetu.'}
            itemBirthTime={'04-14 12:48'}
          />
          <CardComponent
            itemCompleted
            itemType={'defect'}
            itemTitle={'ISSUE-111'}
            itemContent={'Lorem ipsum dolor sit amet, consectetu.Lorem ipsum dolor sit amet, consectetu.'}
            itemBirthTime={'04-14 12:48'}
          />
          <CardComponent
            itemCompleted={false}
            itemType={'improvement'}
            itemTitle={'ISSUE-111'}
            itemContent={'Lorem ipsum dolor sit amet, consectetu.Lorem ipsum dolor sit amet, consectetu.'}
            itemBirthTime={'04-14 12:48'}
          />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    );
  }
}

ListComponent.propTypes = {
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
