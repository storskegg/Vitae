CurrentPlayer = React.createClass({
  render () {
    "use strict";

    return (
      <div className="current player val-3 container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <div className="btn-group" role="group">
              <button className="btn btn-danger">-4</button>
              <button className="btn btn-danger">-1</button>
            </div>
          </div>

          <div className="col-xs-4 text-center">
            <div className="col-xs-12">val</div>
          </div>

          <div className="col-xs-4 text-right">
            <div className="btn-group" role="group">
              <button className="btn btn-primary">+1</button>
              <button className="btn btn-primary">+4</button>
            </div>
          </div>

          <div className="col-xs-6">
            <button className="btn btn-success btn-sm">-1</button>
          </div>

          <div className="col-xs-6 text-right">
            <button className="btn btn-success btn-sm">+1</button>
          </div>
        </div>
      </div>
    );
  }
});
