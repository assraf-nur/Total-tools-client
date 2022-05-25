import React from "react";
import nur from "../../Images/nur.jpg";

const Portfolio = () => {
  return (
    <div className="px-12 mt-12">
      <div class="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-0 p-5">
        <figure>
          <img
            className="rounded-2xl ml-5 absolute left-2 top-16"
            style={{width: '400px'}}
            src={nur}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-5xl font-semibold">Assrafuzaman Nur</h2>
          <p className="text-xl font-semibold">Email: nurtesla@gmail.com</p>
          <p className="text-xl font-semibold">Phone: 01760523833</p>
          <div>
             <div>
                <p className="text-xl font-semibold">Educational Background: </p>
             </div>
             <div className="border-4 p-3 rounded-2xl ">
                <p className="text-lg font-semibold">BSc. From: Daffodil International University </p>
                <p className="text-lg font-semibold">CGPA: 3.32</p>
                <p className="text-lg font-semibold">Passing Year: 2021</p>
             </div>
             <div className="border-4 p-3 rounded-2xl mt-3">
                <p className="text-lg font-semibold">HSC From: Govt Yasin College Faridpur </p>
                <p className="text-lg font-semibold">GPA: 4.67</p>
                <p className="text-lg font-semibold">Section: Science</p>
                <p className="text-lg font-semibold">Passing Year: 2016</p>
             </div>
             <div className="border-4 p-3 rounded-2xl mt-3">
                <p className="text-lg font-semibold">SSC From: Faridpur Zilla School</p>
                <p className="text-lg font-semibold">GPA: 5.00</p>
                <p className="text-lg font-semibold">Section: Science</p>
                <p className="text-lg font-semibold">Passing Year: 2014</p>
             </div>
          </div>
          <div>
              <h2 className="text-2xl font-semibold">List of Skill:</h2>
              <div>
                  <ul className="text-lg grid grid-cols-1 gap-2">
                      <li className="badge p-3 text-white">
                          React.js
                      </li>
                      <li className="badge p-3 text-white">
                          Express.js
                      </li>
                      <li className="badge p-3 text-white">
                          node.js
                      </li>
                      <li className="badge p-3 text-white">
                          MongoDB
                      </li>
                      <li className="badge p-3 text-white">
                          Firebase
                      </li>
                      <li className="badge p-3 text-white">
                          HTML
                      </li>
                      <li className="badge p-3 text-white">
                          CSS
                      </li>
                      <li className="badge p-3 text-white">
                          javaScript
                      </li>
                      <li className="badge p-3 text-white">
                          BootStrap
                      </li>
                      <li className="badge p-3 text-white">
                          Tailwind
                      </li>
                  </ul>
              </div>
          </div>
          <div>
              <h2 className="text-2xl font-semibold">Project Link:</h2>
              <div>
                <p className="text-lg font-semibold mb-3">D-valley: https://d-valley-2a581.web.app/</p>
                <a className="bg-green-800 rounded-2xl text-white p-2" href="https://d-valley-2a581.web.app/" target='_blank'>Go to D-valley</a>
              </div>
              <div>
                    <p className="text-lg font-semibold mb-3">Mohsin Clicks: https://mohsin-click.web.app/</p>
                    <a className="bg-pink-800 rounded-2xl text-white p-2" href="https://mohsin-click.web.app/" target='_blank'>Go to Mohsin Clicks</a>
              </div>
              <div>
                    <p className="text-lg font-semibold mb-3">Tesla Cars:  https://tesla-models.netlify.app/</p>
                    <a className="bg-purple-800 rounded-2xl text-white p-2" href=" https://tesla-models.netlify.app/" target='_blank'>Go to Tesla Cars</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
