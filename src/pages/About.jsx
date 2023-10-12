import React from 'react';
import { aboutImg, socialLinks } from '../utils/constant';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="container-max py-5">
      <div className="flex flex-col-reverse sm:flex-row px-4 py-2 sm:py-10 rounded-md shadow-sm">
        <div className="md:basis-[35%] lg:basis-[30%] overflow-hidden px-0 sm:px-4 ">
          <img className="w-full h-full rounded-3xl" src={aboutImg} alt="me" />
        </div>
        <div className="md:basis-[65%] lg:basis-[70%] px-2 lg:px-4">
          <h1 className="text-2xl text-zinc-900 font-semibold pb-2">About us</h1>
          <p className="text-sm text-zinc-600 ">
            Hello, I'm Sunny Mallick, a recent graduate from Bengal Institute of Technology in
            Kolkata, where I earned my Bachelor's degree in Information Technology in 2023. I am a
            passionate web developer with two months of professional experience at Maddggar
            Foundation. I possess a strong foundation in web development, with expertise in HTML,
            CSS, and JavaScript. Furthermore, I have hands-on experience working with ReactJS and
            Redux, and I have successfully completed numerous projects utilizing these technologies,
            often incorporating Firebase for backend functionality and Tailwind CSS for front-end
            styling. My commitment to creating efficient, user-friendly web applications, combined
            with my ever-growing skill set, drives me to continuously learn and adapt to the
            ever-evolving world of web development. I am enthusiastic about contributing to
            innovative projects and collaborating with others to deliver exceptional web solutions.
            Thank you for taking the time to learn more about me, and I look forward to the exciting
            opportunities that lie ahead in the field of web development.
          </p>
          <div className="flex items-center gap-3 py-4">
            {socialLinks.map((item) => {
              return (
                <Link
                  to={item.path}
                  target="_blank"
                  className="text-xl  text-zinc-800 transition-all hover:text-orange-500"
                  key={item.id}>
                  {item.icons}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
