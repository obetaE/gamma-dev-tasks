"use client";
import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { 
  FaShieldAlt, 
  FaAnchor, 
  FaUsers, 
  FaWater, 
  FaTools, 
  FaRecycle 
} from 'react-icons/fa';
import { 
  FaCheck, 
  FaArrowRight,
  FaTachometerAlt
} from 'react-icons/fa';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaCar, 
  FaDirections,
  FaStore,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      headline: "Ride the Waves with Confidence",
      subtext: "Engineered for families, built with safety at the core.",
      image: "https://images.unsplash.com/photo-1650939489556-a6fc47e28372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      headline: "Adventure that Lasts",
      subtext: "Our jet skis are designed for endurance — because memories should outlast the tide.",
      image: "https://images.unsplash.com/photo-1641075298538-afccb186b6e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      headline: "Safe Waters, Happy Families",
      subtext: "Every detail crafted to keep parents reassured and children smiling.",
      image: "https://images.unsplash.com/photo-1658434061535-a8e6fb6f713e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      headline: "Built Strong. Tested True.",
      subtext: "No empty promises — just reliable performance that stands the test of time.",
      image: "https://images.unsplash.com/photo-1443048755297-240f155c9099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      headline: "High Quality. High Trust.",
      subtext: "More than a ride — a commitment to safety, security, and strength.",
      image: "https://images.unsplash.com/photo-1524061508355-90afbf7fcf03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      headline: "Waves Change. Our Promise Doesn't.",
      subtext: "Durability, safety, and peace of mind in every ride.",
      image: "https://images.unsplash.com/photo-1599445548258-8f6f8e1b0272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
    }
  ];

  const ourValues = [
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    description: "Every product is designed with multiple safety features and rigorous testing protocols to ensure peace of mind for families."
  },
  {
    icon: <FaAnchor />,
    title: "Durability",
    description: "We use only marine-grade materials and construction techniques that withstand harsh conditions and years of use."
  },
  {
    icon: <FaUsers />,
    title: "Family Focus",
    description: "Our designs prioritize comfort and accessibility for all ages, making every ride a joyful family experience."
  },
  {
    icon: <FaWater />,
    title: "Adventure",
    description: "We engineer our jet skis to unlock new possibilities for water exploration while maintaining uncompromised safety."
  },
  {
    icon: <FaTools />,
    title: "Craftsmanship",
    description: "Each component is precision-engineered and assembled with meticulous attention to detail by skilled technicians."
  },
  {
    icon: <FaRecycle />,
    title: "Sustainability",
    description: "We're committed to eco-friendly manufacturing processes and reducing our environmental impact on the waters we love."
  }
];

const jetSkiModels = [
    {
      id: 1,
      name: "Voyager Family",
      price: "$12,499",
      image: "https://images.unsplash.com/photo-1570891836654-d496c8ff4b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV0JTIwc2tpfGVufDB8fDB8fHww",
      features: [
        "3-person capacity",
        "Stability control system",
        "Child safety mode",
        "5-year warranty"
      ],
      specs: {
        topSpeed: "55 mph",
        engine: "1500cc",
        capacity: "3 adults"
      }
    },
    {
      id: 2,
      name: "Explorer Pro",
      price: "$15,999",
      image: "https://images.unsplash.com/photo-1599445548258-8f6f8e1b0272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
      features: [
        "4-person capacity",
        "Advanced navigation system",
        "Extended battery life",
        "Premium sound system"
      ],
      specs: {
        topSpeed: "65 mph",
        engine: "1800cc",
        capacity: "4 adults"
      }
    },
    {
      id: 3,
      name: "Guardian Elite",
      price: "$18,499",
      image: "https://images.unsplash.com/photo-1524061508355-90afbf7fcf03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGpldHNraXxlbnwwfHwwfHx8MA%3D%3D",
      features: [
        "5-person capacity",
        "Military-grade construction",
        "Emergency beacon",
        "Lifetime warranty"
      ],
      specs: {
        topSpeed: "70 mph",
        engine: "2000cc",
        capacity: "5 adults"
      }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        {/* Background slides */}
        <div className={styles.slideWrapper}>
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
        
        {/* Circular text container */}
        <div className={styles.textarea}>
          <span className={styles.title}>Welcome to 
            <h1 className={styles.highlight}>Hub Company</h1>
          </span>
          
          <div className={styles.slideContent}>
            <h1 className={styles.headline}>{heroSlides[currentSlide].headline}</h1>
            <p className={styles.subtext}>{heroSlides[currentSlide].subtext}</p>
          </div>
          
          {/* Navigation dots */}
          <div className={styles.navDots}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Our Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>The principles that guide everything we create</p>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.valuesGrid}>
            {ourValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Shop Section */}
       <section className={styles.modelsSection}>
        <div className={styles.modelsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Premium Collection</h2>
            <p className={styles.sectionSubtitle}>Engineered for safety, built for adventure</p>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.modelsGrid}>
            {jetSkiModels.map((model) => (
              <div key={model.id} className={styles.modelCard}>
                <div className={styles.modelImageContainer}>
                  <img src={model.image} alt={model.name} className={styles.modelImage} />
                  <div className={styles.modelOverlay}>
                    <button className={styles.quickViewBtn}>Quick View</button>
                  </div>
                </div>
                
                <div className={styles.modelContent}>
                  <h3 className={styles.modelName}>{model.name}</h3>
                  <div className={styles.modelPrice}>{model.price}</div>
                  
                  <div className={styles.modelSpecs}>
                    <div className={styles.specItem}>
                      <FaTachometerAlt className={styles.specIcon} />
                      <span>{model.specs.topSpeed}</span>
                    </div>
                    <div className={styles.specItem}>
                      <FaWater className={styles.specIcon} />
                      <span>{model.specs.engine}</span>
                    </div>
                    <div className={styles.specItem}>
                      <FaUsers className={styles.specIcon} />
                      <span>{model.specs.capacity}</span>
                    </div>
                  </div>
                  
                  <ul className={styles.featuresList}>
                    {model.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        <FaCheck className={styles.featureIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={styles.ctaButton}>
                    View Details <FaArrowRight className={styles.ctaIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.shopCta}>
            <h3 className={styles.ctaTitle}>Ready for Your Next Adventure?</h3>
            <p className={styles.ctaSubtitle}>Explore our full range of premium jet skis and accessories</p>
            <button className={styles.shopButton}>
              Visit Our Shop <FaArrowRight className={styles.shopIcon} />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Visit Our Experience Center</h2>
            <p className={styles.sectionSubtitle}>See our premium jet skis in person and speak with our experts</p>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaStore />
                </div>
                <h3>Store Location</h3>
                <p>123 Ocean Drive, Miami, FL 33139</p>
                <p>Located at the Marina Bay waterfront</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaClock />
                </div>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 11:00 AM - 4:00 PM</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <h3>Contact Us</h3>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@hubcompany.com</p>
                <p>WhatsApp: +1 (555) 123-4567</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FaCar />
                </div>
                <h3>Parking Information</h3>
                <p>Complimentary valet parking available</p>
                <p>Electric vehicle charging stations</p>
                <p>Ample space for trailers</p>
              </div>
            </div>
            
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                <p>Interactive Map Would Appear Here</p>
                <button className={styles.directionsButton}>
                  <FaDirections /> Get Directions
                </button>
              </div>
              
              <div className={styles.visitBenefits}>
                <h3>Why Visit Our Store?</h3>
                <ul>
                  <li>Test ride available for qualified buyers</li>
                  <li>Expert consultation on model selection</li>
                  <li>See and feel the premium materials in person</li>
                  <li>Exclusive in-store promotions</li>
                  <li>Immediate delivery options</li>
                </ul>
                
                <div className={styles.ctaContainer}>
                  <h4>Ready to experience luxury on water?</h4>
                  <button className={styles.visitCta}>
                    Plan Your Visit <FaDirections className={styles.ctaIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;