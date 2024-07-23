import React from 'react';
import HemoroidDetails from '../drwawo/hemoroidectomie/page';
import { HemoroidData } from '../libs/operation';
import data from '../drwawo/hemoroidectomie/data.json';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <HemoroidDetails data={data as HemoroidData} />
    </div>
  );
}

export default Home;
