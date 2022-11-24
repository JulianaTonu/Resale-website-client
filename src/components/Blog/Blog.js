import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            
            <h1 className='text-center mt-5 text-primary text-3xl font-bold'>Here Are Some Questions with Answers</h1>

    <div class="container  ">

        <div class="p-4 text">
            <div class="p-4 mb-4 ques">
              <h5 className='text-primary font-bold'>1.What are the different ways to manage a state in a React application?</h5>
              <p>Ans:When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state</p>
            </div>
         
            <div class="p-4 mb-4 ques">
              <h5 className='text-primary font-bold'>2.  How does prototypical inheritance work? </h5>
              <p>Ans :The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
            <div class="p-4 mb-4 ques">
              <h5 className='text-primary font-bold'>3. What is a unit test? Why should we write unit tests? </h5>
              <p>Ans :Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.
   
              </p>
            </div>
           
            <div class="p-4 mb-4 ques">
              <h5 className='text-primary font-bold'>4.React vs. Angular vs. Vue?</h5>
              <p>Ans :If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
              The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
              In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. 
    </p>
                
              
            </div>
           
    

        </div>
        </div>
        </div>
    );
};

export default Blog;
