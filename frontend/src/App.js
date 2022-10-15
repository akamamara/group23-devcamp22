import React from 'react';
import './App.css';
import Homepage from './views/Homepage';
import ProblemDetails from './views/ProblemDetails';
import SummaryDetails from './views/SummaryDetails';
function App() {
  return (
    <div className="max-w-[600px] relative mx-auto h-screen overflow-scroll scrollbar-hide">
      {/* <Homepage /> */}
      <ProblemDetails />
      {/* <SummaryDetails />
      <div className='sticky bg-white px-7 py-6 bottom-0 left-0 right-0 scrollbar-hide'>
        <div className='flex gap-6 justify-between'>
          <h1>Total biaya</h1>
          <div className='space-y-3'>
            <h2>Tukang-Medium Rp. 6,000,000</h2>
            <h2>Material Rp. 6,000,000</h2>
          </div>
        </div>
        <div className='flex justify-between gap-6'>
        <button className='flex-1 px-5 py-2 bg-blue-300 rounded-xl mt-10'>Pesan Sekarang</button>
        <button className='flex-1 px-5 py-2 bg-blue-300 rounded-xl mt-10'>Ubah Material</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
