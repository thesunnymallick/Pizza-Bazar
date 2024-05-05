import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from '../utils/constant';
import toast from 'react-hot-toast';
const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // send message
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success('message send');
      setIsLoading(false);
      e.target.reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error.text);
      toast.error('message not send');
      e.target.reset();
    }
  };
  return (
    <div className="container-max py-2 sm:py-5">
      <div className="w-[95%] md:w-[60%] lg:w-[40%] mx-auto p-8 shadow-md rounded-md">
        <h1 className="text-2xl text-zinc-900 font-semibold">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 py-4">
          <input
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            type="text"
            placeholder="ex:jhon dino"
            name="user_name"
            required
          />
          <input
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            type="email"
            placeholder="ex:example@gmail.com"
            required
            name="user_email"
          />
          <input
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            type="text"
            placeholder="ex:website feadback"
            required
            name="user_subject"
          />
          <textarea
            required
            className="w-[90%] border border-zinc-400 outline-orange-500 px-4 py-2 rounded-md text-base text-zinc-700"
            placeholder="ex:Your website is very beautiful."
            name="user_message"></textarea>
          <button
            type="submit"
            className="w-[40%] h-9 bg-orange-500 text-white text-base rounded-md hover:bg-orange-600 flex items-center justify-center gap-2 ">
            {isLoading !== true ? (
              <>
                <span>Send</span>
                <span>
                  <FiSend className="text-xl" />
                </span>
              </>
            ) : (
              <>
                <span>please wait</span>
                <div className="w-5 h-5 bg-transparent border-t-[1.8px] border-white border-solid   rounded-full animate-spin"></div>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
