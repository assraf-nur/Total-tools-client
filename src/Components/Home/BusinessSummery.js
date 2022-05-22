import React from "react";
import CountUp from 'react-countup';
import { FcShipped, FcBullish, FcSupport } from "react-icons/fc";

const BusinessSummery = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">Our Business Reach</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 justify-items-center mt-12">
       <div className="border shadow-2xl p-8 rounded-3xl">
       <FcShipped className="text-center text-7xl mx-auto"/>
       <CountUp start={0} end={158} delay={0} duration={10} separator=" ">
          {({ countUpRef }) => (
            <div>
              <span className="text-5xl ml-9" ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-center text-xl font-semibold">Shipping Country</p>
       </div>

       <div className="border shadow-2xl p-8 rounded-3xl">
           <FcBullish className="text-center text-7xl mx-auto"/>
       <CountUp start={0} end={240} delay={0} duration={9} separator=" ">
          {({ countUpRef }) => (
            <div>
              <span className="text-5xl ml-20" ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-center text-xl font-semibold">Million+ Annual Revenue</p>
       </div>

        <div className="border shadow-2xl p-8 rounded-3xl">
            <FcSupport className="text-center text-7xl mx-auto"/>
        <CountUp start={0} end={50} delay={0} duration={6} separator=" ">
          {({ countUpRef }) => (
            <div>
              <span className="text-5xl ml-12" ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-center text-xl font-semibold">Tools Variation</p>
        </div>

      </div>
    </div>
  );
};

export default BusinessSummery;
