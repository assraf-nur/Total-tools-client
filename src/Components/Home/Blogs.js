import React from "react";

const Blogs = () => {
  return (
    <div className="px-12 mt-8">
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title">Improve the performance of a React Application</h2>
            <p>1. Avoid Inline Function Definition in the Render Function.</p>
            <p>2. Throttling and Debouncing Event Action in JavaScript</p>
            <p>3. Avoid using Index as Key for map</p>
            <p>4. Avoiding Props in Initial States</p>
            <p>5. Spreading props on DOM elements</p>
            <p>6. CSS Animations Instead of JS Animations</p>
            <p>7. Using a CDN</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title">Different ways to manage a state in a React application</h2>
            <p>There are four types of state to properly manage in React App:</p>
            <ul>
              <li>1. Local state</li>
              <li>2. Global state</li>
              <li>3. Server state</li>
              <li>4. URL state</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title"> How does prototypical inheritance work</h2>
            <p>Prototypical inheritance refers to the ability to access object properties from another object. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title">If we have const [products, setProducts] = useState([]). Why we do not set products = [...] instead, you use the setProducts</h2>
            <p>We declare a state variable called products, and set it to empty array. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current products, we can call setProducts.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title">We have an array of products. Each product has a name, price, description, etc. How will we implement a search to find products by name?</h2>
            <p>There are four way to search :</p>
            <ul>
              <li>1. Using includes(), The includes() method returns either a true or a false if a value exists in an array or not. The first parameter, valueToFind, is the value to match in the array. The second parameter, fromIndex, is optional and sets the index from which to begin comparisons. The default is 0, so the entire array is searched.</li>
              <br />
              <li>2. Using indexOf(), The indexOf() method returns the first index of a value in an array. If there is no match, the method returns -1. indexOf is helpful for use cases where you need a single index of a relevant search result.</li>
              <br />
              <li>3. Using find(), The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined. find() is helpful for use cases where you want a single search result value.</li>
              <br />
              <li>4. Using filter(), The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array. filter() is helpful for use cases where you want multiple search result values.</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-full bg-base-100 shadow-xl my-5">
          <div class="card-body">
            <h2 class="card-title"> What is a unit test? Why should write unit tests?</h2>
            <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
            <br />
            <p>For the best practice, all projects must be under unit testing, but normally it is used for larger projects. Smaller projects can still benefit from unit tests, but project managers and clients should evaluate the time needed to develop unit tests during the project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
