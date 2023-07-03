import { memo } from "react";
import {BiWorld} from "react-icons/bi";
import styles from "./Footer.module.css";
const Footer = memo(() => {
  console.log("Footer");
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__social}>
        <li>
          <a
            href="https://github.com/freddywebmaster"
            target="_blank"
            rel="noreferrer noopener"
            title="My Github profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/freddy-gutierrez-15129a19a/"
            target="_blank"
            rel="noreferrer noopener"
            title="My LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/freddy-gutierrez-15129a19a/"
            target="_blank"
            rel="noreferrer noopener"
            title="My personal portfolio"
          >
           <BiWorld />
          </a>
        </li>
      </ul>
      <ul className={styles.footer__links}>
        <li>
          <a href="#">Audio and Subtitles</a>
        </li>
        <li>
          <a href="#">Audio Description</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Media Center</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Legal Notices</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className={styles.footer__bottom}>
        <small>Netflix Clone created by FwebMater.</small>
        <small>
          The best Netflix clone with the mernStack {" "}
          <a
            href="https://fwebmaster.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
            title="Personal portfolio"
          >
            Portfolio 
          </a>
          .
        </small>
      </div>
    </footer>
  );
});

export default Footer;
