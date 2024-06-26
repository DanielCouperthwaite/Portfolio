import React from "react";
import Details from "./Details";
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://formsubmit.co/ajax/danielcoup1@outlook.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        message: message,
        email: email

      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(() => {
        setEmail("")
        setMessage("")
        setName("")
      })
      .then(() => {
        alert("Message Sent!")
      })
      .catch((error) => alert(error));


  }

  

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", name, email, message }),
  //   })
  //     .then(() => {
  //       setEmail("")
  //       setMessage("")
  //       setName("")
  //     })
  //     .then(() => {
  //       alert("Message Sent!")
  //     })
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative">
       <div className="bg-fuchsia-800 py-24 sm:py-32">
      
      <div className="container px-10 py-10 mx-auto flex md:flex-nowrap flex-wrap">
        
        <div className="sm:w-2/3 bg-fuchsia-200 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Details />
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Want to work with me, or simply offer project feedback? You can drop me a comment right here,
            or follow my contact details directly. Thanks for visiting!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              value={message}
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}