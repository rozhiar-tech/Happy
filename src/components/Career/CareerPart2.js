import React from 'react';
import Data from './jobs.data.json';

const CareerPart2 = () => {
  return (
    <div className="my-14 max-w-6xl mx-auto px-4">
      <h2 className="mb-2 text-4xl text-gray-900">CURRENT OPEN POSITIONS</h2>
      <h3 className="text-2xl leading-[1.625rem] text-black/50">
        Please send us an email with the application title as the subject with
        an attached CV in PDF format!
      </h3>
      <table className="">
        <tbody>
          {Data &&
            Data.map((record) => {
              return (
                <React.Fragment key={record.id}>
                  <tr>
                    <td className="cursor-pointer text-lavender-indigo hover:text-wild-strawberry/70 focus:text-wild-strawberry/70 text-3xl leading-10 pt-8">
                      {record.jobTitle}
                    </td>
                    <td className="cursor-pointer text-lavender-indigo hover:text-wild-strawberry/70 focus:text-wild-strawberry/70 text-2xl pt-8">
                      {record.department}
                    </td>
                  </tr>
                  <tr className="border-b-2 ">
                    <td className="text-gray-900 text-xl leading-6 pb-8">
                      {record.jobDescription}
                    </td>
                    <td className="text-gray-900 text-xl leading-6 pb-8">
                      {record.type}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default CareerPart2;
