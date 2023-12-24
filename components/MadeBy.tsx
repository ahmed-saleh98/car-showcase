import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaCodepen,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const MadeBy = () => (
  <div
    className="flex md:justify-between justify-center items-center bg-primary-blue-100
  flex-wrap gap-5 border-t border-gray-300 sm:px-16 px-6 py-6"
  >
    <div>
      Made With Love <span className="text-red-700 text-l"> &#10084; </span> By
      Ahmed Saleh
    </div>

    <div className="social-links ">
      <ul className=" flex gap-4">
        <li>
          <a
            className="facebook"
            target="_blank"
            href="https://www.facebook.com/abusaleh1998"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ahmed_saleh_98"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+20 01273698284"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            className="website"
            target="_blank"
            rel="noreferrer"
            href="https://ahmedsaleh.vercel.app"
          >
            <FaGlobe />
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmed-mo-saleh"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ahmed-saleh98"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="codepen"
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/ahmed-saleh98"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            className="mail"
            target="_blank"
            rel="noreferrer"
            href="mailto:ahmed.mo.saleh98@gmail.com"
          >
            <HiMail />
          </a>
        </li>
      </ul>
    </div>
  </div>
);
export default MadeBy;
