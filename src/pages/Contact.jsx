import React from 'react';

const Contact = () => {
  return (
    <div className="container-max py-5">
      <div className="w-[40%] mx-auto py-4 px-4 shadow-lg rounded-md">
        <h1 className="text-2xl text-zinc-900 font-semibold">Contact Us</h1>
        <form className="flex flex-col gap-6 py-4">
          <input
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            type="text"
            placeholder="ex:jhon dino"
          />
          <input
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            type="email"
            placeholder="ex:example@gmail.com"
          />
          <textarea
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            placeholder="ex:Your website is very beautiful."></textarea>
          <button className="w-[40%] h-9 bg-orange-500 text-white text-base rounded-md hover:bg-orange-600 ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
