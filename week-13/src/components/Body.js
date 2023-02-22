import React from 'react';
import Input from './Input';
import Output from './Output';

const Body = () => {
  return (
    <div className="pb-10 flex flex-col">
      <h1 className="font-bold text-4xl p-10 text-center">
        More than just shorter Links
      </h1>
      <h3 className="pl-10 text-center">
        Build your brand's recognision and get detail insites on how your links
        are performing
      </h3>

      <Input />
      <Output />
    </div>
  );
};

export default Body;
