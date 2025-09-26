"use client"
import React, { useState } from 'react'
import styles from "./MobileNavbar.module.css"
import Link from 'next/link'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = [
    {title: "Homepage", path: "/"},
    {title: "Contact Us", path: "/"},
    {title: "Shop", path: "/"},
    {title: "About Us", path: "/"},
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.logo}>H<span>C</span></div>
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Slide-out Menu */}
      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.nav}>
          {navLink.map((link) => (
            <Link 
              className={styles.link} 
              href={link.path} 
              key={link.title}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          <span className={styles.connect}>Connect with us</span>
          <div className={styles.socialIcons}>
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
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </div>
  )
}

export default MobileNavbar