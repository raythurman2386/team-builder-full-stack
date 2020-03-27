import React from 'react';
import Layout from '../Layout/Layout';
import Jobs from './Jobs';

const Dashboard = props => {
  return (
    <Layout>
      <Jobs props={props} />
    </Layout>
  );
};

export default Dashboard;
