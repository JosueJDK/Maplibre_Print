import React from 'react';

const Pagination = ({ setCurrentPage, labelsAll }:{ setCurrentPage : any, labelsAll : any }) => {
  const labels : any = Object.keys(labelsAll);
  return (
    <div className="flex justify-center">
      {labels.map((label, index) => (
        <button
          key={index}
          value={label}
          onClick={() => setCurrentPage(label)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
