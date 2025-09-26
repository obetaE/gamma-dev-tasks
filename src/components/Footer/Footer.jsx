import React from 'react'
import styles from "./Footer.module.css"
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>Hub Company</h3>
            <p className={styles.footerDescription}>
              Manufacturing premium jet skis with uncompromising safety, durability, 
              and family-focused design since 2010.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>info@hubcompany.com</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>123 Ocean Drive, Miami, FL 33139</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Products</a></li>
              <li><a href="#">Safety Features</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Support</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Spare Parts</a></li>
              <li><a href="#">Service Centers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Why Choose Us</h4>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <FaShieldAlt className={styles.featureIcon} />
                <span>5-Year Warranty</span>
              </div>
              <div className={styles.featureItem}>
                <FaShippingFast className={styles.featureIcon} />
                <span>Free Shipping</span>
              </div>
              <div className={styles.featureItem}>
                <FaHeadset className={styles.featureIcon} />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4 className={styles.footerTitle}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; {new Date().getFullYear()} Hub Company. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
