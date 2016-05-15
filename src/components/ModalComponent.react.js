import React from 'react';

export default class ModalComponent extends React.Component {
  render() {
    let className = 'modal-background';
    console.log(this.props);
    if (!this.props.isShowingModal) {
      className += ' hide';
    }
    console.log(className);
    return (
      <div className={className}>
        <div className="modal" tabindex="12121" role="dialog">
          <button type="button" onClick={this.props.handleClose} className="close" data-dismiss="modal" aria-label="Close">×</button>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create Issue</h4>
                <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="label-control">Issue Name</label>
                  <input className="form-control input-block" value="ISSUE-"/>
                </div>
                <div className="form-group">
                  <label className="label-control">Issue Type</label>
                  <select className="form-control input-block">
                    <option>Option 01</option>
                    <option>Option 02</option>
                    <option>Option 03</option>
                    <option>Option 04</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="label-control">Issue List</label>
                  <select className="form-control input-block">
                    <option>Option 01</option>
                    <option>Option 02</option>
                    <option>Option 03</option>
                    <option>Option 04</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-block">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
