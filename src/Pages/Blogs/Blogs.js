import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-5 mx-16'>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-2xl dark:bg-gray-700 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">1. Difference between SQL and NoSQL?</h2>
                    <p className="mt-4 dark:text-gray-400">Type:- SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br /> Language :– SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-2xl dark:bg-gray-700 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">4. How does Node JS handle multiple requests at the same time?</h2>
                    <p className="mt-4 dark:text-gray-700">Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds? No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
                    </p>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-2xl dark:bg-gray-700 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">3. What is the difference between javascript and NodeJS?</h2>
                    <p className="mt-4 dark:text-gray-400">1. NodeJS :- NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />2. JavaScript :- Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-2xl dark:bg-gray-700 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">2. What is JWT, and how does it work?</h2>
                    <p className="mt-4 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;