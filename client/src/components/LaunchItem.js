import React from 'react';
import rocket from '../rocket.png';
import classNames from 'classnames';

export default function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_year,
    launch_date_local,
    launch_success,
  },
}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card text-center transform-on-hover">
        <img src={rocket} alt="rocket" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">
            Mission:{' '}
            <span className={launch_success ? 'text-success' : 'text-danger'}>
              {mission_name}
            </span>
          </h4>
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
}
