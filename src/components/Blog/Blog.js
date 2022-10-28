import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1>what is cors?</h1>
            <h3>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</h3>
            <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h3>I use firebase Authentication beacuse of, easy-to-use SDKs, and ready-made UI libraries to authenticate users to my app. I implement many authentication option using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</h3>
            <h1>How does the private route work?</h1>
            <h3>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h3>
            <h1> What is Node? How does Node work?</h1>
            <h3>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h3>
        </div>
    );
};

export default Blog;