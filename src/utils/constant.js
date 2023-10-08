import { AiOutlineHome, AiOutlineProfile } from 'react-icons/ai';
import { BsBag, BsChevronDown, BsChevronUp, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.png';
import startIcon from '../assets/star.png';
import NotFoundImg from '../assets/noImage.jpg';
import emptyCart from '../assets/emptyCart.png';
import notfound from '../assets/notFound.png';
import error from '../assets/error.png';

export const NavLinks = [
  { id: 1, title: 'Home', icon: <AiOutlineHome />, path: '/' },
  { id: 2, title: 'About', icon: <AiOutlineProfile />, path: '/about' },
  { id: 3, title: 'Contact', icon: <BiSupport />, path: '/contact' },
];

export const CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

export const GET_RESTAURANTS_URL = 'https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants';

export {
  logo,
  BsChevronDown,
  IoLocationOutline,
  BsBag,
  RxHamburgerMenu,
  RxCross1,
  BsArrowLeft,
  BsArrowRight,
  startIcon,
  BsChevronUp,
  NotFoundImg,
  emptyCart,
  notfound,
  error,
};
