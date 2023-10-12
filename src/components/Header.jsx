import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavLinks,
  logo,
  BsChevronDown,
  IoLocationOutline,
  BsBag,
  RxHamburgerMenu,
  RxCross1,
} from '../utils/constant';
import { Style } from '../utils/style';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { items } = useSelector((state) => state.cart);
  const { address } = useSelector((state) => state.address);
  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`${Style.flexBetween} ${Style.bgcolor} px-7 sticky z-20 top-0 py-5 shadow-md`}>
      <div className={``}>
        <div className={`${Style.flexCenter} flex-col md:flex-row md:gap-2`}>
          <div className={`${Style.flexCenter}`}>
            <LazyLoadImage
              className="hidden md:block md:w-12"
              src={logo}
              alt="logo"
              effect="blur"
            />
            <div className="mr-12 md:mr-0">
              <span
                className={`text-lg flex ${Style.textColor}  md:${Style.flexCenter} md:ml-2 font-bold`}>
                <IoLocationOutline className="sm:hidden" />
                <span className="">Other</span>
              </span>
            </div>
          </div>

          <div
            onClick={openModal}
            className={`${Style.flexCenter} gap-1 cursor-pointer py-1 mr-6 lg:mr-0`}>
            <span className={`${Style.textColor} ${Style.hover1} text-lg sm:text-base `}>
              {address.city}
            </span>
            <span className={`mt-1 text-lg font-bold ${Style.textPrimary}`}>
              <BsChevronDown />
            </span>
          </div>
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal} />}

      <div className={`${Style.flexCenter} gap-6`}>
        <div
          className={`${
            isOpen ? 'translate-x-0 ' : '-translate-x-full'
          } md:hidden absolute left-0 top-0 flex justify-center items-center  flex-col gap-6 z-10 py-1 w-[70%] sm:w-[50%] transition-all   bg-gray-100 h-screen
       `}>
          {NavLinks.map((nav) => {
            return <NavItem setIsOpen={setIsOpen} key={nav.id} nav={nav} />;
          })}
        </div>

        <div className={`hidden md:flex items-center gap-6`}>
          {NavLinks.map((nav) => {
            return <NavItem setIsOpen={setIsOpen} key={nav.id} nav={nav} />;
          })}
        </div>

        <div className={`${Style.flexCenter} gap-5`}>
          <Link
            to="/cart"
            className={`${Style.flexCenter} hover:${Style.hover2} ${Style.textColor} gap-2 relative`}>
            <span className={`text-2xl font-extrabold `}>
              <BsBag />
            </span>
            <span className="w-5 h-5 bg-orange-500 rounded-full text-xs flex justify-center items-center text-white font-semibold absolute bottom-3 left-4">
              {items?.length}
            </span>
          </Link>

          <span onClick={toggleNavMenu} className={`md:hidden text-xl font-extrabold `}>
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ nav, setIsOpen }) => {
  return (
    <Link
      onClick={() => setIsOpen(false)}
      className={`${Style.flexCenter} hover:${Style.hover2} ${Style.textColor} gap-2 z-20`}
      to={nav.path}>
      <span className={`text-xl font-extrabold `}>{nav.icon}</span>
      <span className={`text-lg font-medium `}>{nav.title}</span>
    </Link>
  );
};
export default Header;
