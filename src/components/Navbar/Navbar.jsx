import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const navLink = [
    {title: "Homepage", path: "/"},
    {title: "Contact Us", path: "/"},
    {title: "Shop", path: "/"},
    {title: "About Us", path: "/"},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>H<span>C</span></div>
      <div className={styles.links}>
        {navLink.map((link) => (
          <Link className={styles.link} href={link.path} key={link.title}>{link.title}</Link>
        ))}
      </div>
      <div className={styles.socials}>
        <span className={styles.connect}>Connect with us</span>
        <div className={styles.icons}>
          <AiFillInstagram />
        </div>
        <div className={styles.icons}>
          <FaXTwitter />
        </div>
        <div className={styles.icons}>
          <FaLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Navbar
