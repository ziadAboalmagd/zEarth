// React & Next
import React from "react";
import Link from "next/link";

// constants & variables
import { socialLinks } from "@/app/constants";

// scss
import classes from "./index.module.scss";

// React Icons
import { IoEarth } from "react-icons/io5";

// footer
function Footer() {
  return (
    <footer className={classes.footer}>
      {/* logo */}
      <div className={classes.logo}>
        <Link
          href="/"
          className="flex flex-row items-center gap-1 text-6xl text-f-dpink  font-bold tracking-widest mx-3 py-1"
        >
          zEarth <IoEarth />
        </Link>
      </div>
      {/* social links */}
      <div className={`${classes.socialLinks} zfoot:!grid-cols-3 zfoot:gap-0`}>
        {socialLinks.map((i, index) => (
          <Link key={index} href={i.link} className={classes.socialLink}>
            <i.icon className={classes.icon} />
            <h5 className={classes.socialTitle}>{i.label}</h5>
          </Link>
        ))}
      </div>
      {/* copyrights */}
      <div className={classes.copyrights}>
        <h5>Copyright © 2024 zEarth. All Rights Reserved.</h5>
      </div>
    </footer>
  );
}

export default Footer;
