import React from 'react';
import { SyncLoader } from 'react-spinners';

const Success = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center">
          <SyncLoader color="#36d7b7" />
         
          Thanks you!
        </h2>
        <p>Your order has been successfully placed</p>
      </div>
    </div>
  );
};

export default Success;
