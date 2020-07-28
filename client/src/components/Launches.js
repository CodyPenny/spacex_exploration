import React, { Component, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';

//create query
//set the data we want
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  // fetch data with the useQuery hook, pass in graphql string
  // returns an object with these 3 properties
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading ...</h4>;
  if (error) {
    console.log(`Error! ${error.message}`);
    return <p>Error</p>;
  }
  // use short syntax for Fragment
  return (
    <>
      <div className="row">
        {data.launches.map((launch) => (
          <LaunchItem key={LaunchItem.flight_number} launch={launch} />
        ))}
      </div>
    </>
  );
}

export default Launches;
