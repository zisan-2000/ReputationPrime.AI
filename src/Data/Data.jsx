import {
  FaAward,
  FaBusinessTime,
  FaHandsHelping,
  FaNewspaper,
  FaRegChartBar,
  FaRegLightbulb,
  FaYahoo,
} from "react-icons/fa";

// Data for Header component
export const headerData = {
  title: {
    part1: "ORM",
    part2: "DASH",
  },
  navLinks: [
    { name: "THE PROCESS", url: "#" },
    { name: "BUSINESS", url: "#" },
    { name: "INDIVIDUAL", url: "#" },
    { name: "WHO WE SERVE", url: "#" },
    { name: "ABOUT US", url: "#" },
  ],
  contact: {
    phoneNumber: "01793-874189",
    buttonLabel: "Contact Us",
  },
  styles: {
    backgroundColor: "bg-white", // Background color for header
    textColor: "text-gray-800", // Text color for navigation links
    buttonColor: "bg-green-600", // Button background color
    buttonTextColor: "text-white", // Button text color
  },
};

export const heroData = {
  title: "Take Control of Your Reputation",
  subtitle: "The Nation's Leading Online Reputation Management Company",
  question: "Who Are You?",
  cards: [
    {
      type: "Individual",
      icon: "FaUser",
      border: true,
    },
    {
      type: "Business",
      icon: "FaUsers",
      border: true,
    },
  ],
  extraCards: [
    {
      type: "Agency",
      icon: "FaBuilding",
      border: true,
    },
    {
      type: "Enterprise",
      icon: "FaCity",
      border: true,
    },
  ],
  buttonLabel: "Continue",
  styles: {
    backgroundColor: "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900", // Background gradient for the hero section
    textColor: "text-white", // Color for the main text
    cardBackgroundColor: "bg-white", // Background color for the cards
    cardTextColor: "text-gray-800", // Text color for the cards
    cardHoverShadow: "hover:shadow-xl", // Hover effect for cards
    buttonColor: "bg-green-600", // Background color for the button
    buttonTextColor: "text-white", // Text color for the button
    borderColor: "border border-green-500", // Border color for the cards
  },
};

// Import necessary icons from react-icons

// Data for RecognitionSection component
export const recognitionData = {
  title:
    "Rated the Best Online Reputation Management Company in 2023 & 2024 by Newsweek.com and NeilPatel.com",
  items: [
    {
      icon: <FaYahoo className="recognition-item-icon text-purple-600" />,
      label: "Yahoo Finance",
    },
    {
      icon: <FaNewspaper className="recognition-item-icon text-red-600" />,
      label: "Newsweek",
    },
    {
      icon: <FaAward className="recognition-item-icon text-green-600" />,
      label: "Clutch 1000",
    },
    {
      icon: <FaBusinessTime className="recognition-item-icon text-blue-600" />,
      label: "Inc. 5000",
    },
    {
      icon: <FaHandsHelping className="recognition-item-icon text-pink-600" />,
      label: "Best Software",
    },
    {
      icon: <FaYahoo className="recognition-item-icon text-blue-900" />,
      label: "Forbes Council", // Placeholder icon and label
    },
  ],
  styles: {
    sectionBackground: "bg-gray-100", // Background color of the section
    titleTextColor: "text-gray-800", // Color of the section title
    itemSpacing: "space-x-14", // Spacing between recognition items
    containerSpacing: "py-10", // Padding for the section container
  },
};

// Data for ReputationSection component
export const reputationData = {
  title: "Online Reputation Management Services",
  paragraphs: [
    "Navigating the digital landscape can be challenging, but your online reputation doesn’t have to be. At NetReputation, we take a proactive approach to managing your online image. Our process begins with a thorough assessment of existing online content, social media activity, and search engine results, providing us with a comprehensive view of your current online reputation. This crucial step allows us to identify areas of strength and opportunities for improvement, whether you're an individual or a business.",
    "Our tailored Online Reputation Management Service is designed to enhance your digital footprint. We cater to a diverse clientele, offering customized strategies that effectively address the unique aspects of your online presence. As experts in the field, we recognize the importance of maintaining a positive digital perception and are committed to ensuring that your online presence accurately reflects your values and aspirations.",
    "Once we have established a clear understanding of your online standing, our focus shifts to elevating it. We create and distribute positive content across multiple platforms, strategically highlighting the best attributes of your personal or business brand. This content is crafted to resonate with your audience, fostering a favorable perception that aligns with your brand's mission.",
    "For businesses, maintaining a robust online reputation is crucial to success. As a leading Reputation Management Agency, we understand that a strong digital presence goes beyond driving sales – it’s about building trust and credibility. Our services help you develop a compelling online image that not only attracts customers but also sets you apart in your industry. Our Review Management Service further supports your brand by managing online reviews, which is vital for enhancing your company’s credibility, revenue, and customer trust.",
    "For individuals, cultivating a positive personal brand is equally important. Our dedicated team of Reputation Management Consultants provides personalized strategies to help you thrive in the digital space. Whether you’re aiming for career growth, personal branding, or expanding your professional network, our services can help you achieve your goals by strengthening your online reputation.",
  ],
  styles: {
    backgroundColor: "bg-gray-50", // Background color for the reputation section
    titleColor: "text-gray-900", // Color for the title text
    paragraphColor: "text-gray-700", // Color for the paragraph text
  },
};

// Import necessary icons from react-icons
// Import necessary icons from react-icons
import {
  FaChartLine,
  FaFileSignature,
  FaHandshake,
  FaLaptop,
  FaShieldAlt,
  FaTrashAlt,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";

// Data for Solutions Section
export const solutionsData = {
  backgroundColor: "bg-blue-50", // Background color for the entire solutions section
  business: {
    title: "Business Solutions",
    cards: [
      {
        icon: <FaChartLine />,
        title: "Reputation Management",
        description:
          "Shape the digital narrative, boost online visibility, and foster trust with tailored reputation management solutions for businesses of all sizes.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaTrashAlt />,
        title: "Content Removal",
        description:
          "Eliminate harmful content and misinformation that could negatively impact your online reputation and business credibility.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaFileSignature />,
        title: "Business Consultation",
        description:
          "Receive expert guidance to enhance your digital presence and drive growth with our business consultation services.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaShieldAlt />,
        title: "Brand Protection",
        description:
          "Defend your brand from online threats and reputation risks with our robust brand protection strategies.",
        backgroundColor: "bg-white", // Background color for each card
      },
    ],
  },
  individual: {
    title: "Individual Solutions",
    cards: [
      {
        icon: <FaUserShield />,
        title: "Reputation Management",
        description:
          "Build, maintain, and safeguard a positive personal reputation with customized solutions for individuals, including professionals and public figures.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaLaptop />,
        title: "Content Removal",
        description:
          "Remove negative information, images, and social media content to protect and restore your personal reputation.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaUserTie />,
        title: "Personal Branding",
        description:
          "Develop a compelling personal brand and establish a professional online image with our personalized branding strategies.",
        backgroundColor: "bg-white", // Background color for each card
      },
      {
        icon: <FaHandshake />,
        title: "Career Management",
        description:
          "Enhance your career prospects and manage your professional reputation with strategic career management services.",
        backgroundColor: "bg-white", // Background color for each card
      },
    ],
  },
};

// Data for Video Section
export const videoSectionData = {
  heading:
    "We help you take control of your online reputation with advanced online reputation management services.",
  subheading:
    "Remove, suppress, repair, and monitor your online reputation with the reputation experts.",
  videoSrc: "https://www.youtube.com/embed/TYOUR_VIDEO_ID", // Replace with your video URL or ID
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    headingColor: "text-gray-900", // Color for the heading text
    subheadingColor: "text-gray-700", // Color for the subheading text
  },
};

import image1 from "../assets/1.png";
// Data for Card Section
export const cardSectionData = {
  cards: [
    {
      image: image1, // Replace with your image path
      title: (
        <span>
          <span className="font-bold text-green-600">Suppress</span> Negative
          Google Results
        </span>
      ),
      description:
        "We have exclusive partnerships with high-authority sites that can build a positive reputation for your business – in real life and on Google. By creating fresh online content, we’re able to replace negative search results to repair your reputation.",
    },
    {
      image: image1, // Replace with your image path
      title: (
        <span>
          <span className="font-bold text-green-600">Impress</span> Everyone
        </span>
      ),
      description:
        "These days, brands are defined by what’s found online. A positive online reputation provides a competitive advantage that’s essential to business growth and success. You have one reputation - we make sure it’s a good one.",
    },
  ],
};

import image2 from "../assets/2.jpg";
// Data for Consultation Section
export const consultationSectionData = {
  heading: "Free Reputation Consultation",
  points: [
    "Find out how others see you online",
    "Entirely free, results provided instantly",
  ],
  phoneNumber: "(941) 584-5949",
  buttonText: "SCHEDULE A FREE CONSULTATION",
  imageSrc: image2, // Replace with your image path
  styles: {
    backgroundColor: "bg-gray-50", // Background color for the section
    headingColor: "text-gray-900", // Color for the heading text
    pointColor: "text-gray-700", // Color for the list items
  },
};

// Data for Service Section
export const serviceSectionData = {
  title: "Comprehensive Online Reputation Management Solutions",
  paragraphs: [
    "Our Online Reputation Management Services provide a holistic approach to managing your digital presence. Beyond just monitoring and content creation, we offer continuous support, strategic content removal, and a proactive approach to help you navigate the evolving digital landscape. With a focus on staying ahead of trends, our team tailors strategies to ensure your online reputation remains robust and accurately represents your brand in an ever-changing online environment.",
    "Ranked as a leading Reputation Management Firm and recognized by both Newsweek.com and NeilPatel.com as the Best Online Reputation Management Company, we at NetReputation understand that each client has distinct requirements. Our solutions are personalized to address the unique challenges faced by each individual or business we partner with. We work collaboratively with you to craft a strategy that not only enhances your current online reputation but also protects it from future risks. We look forward to partnering with you to build a strong, positive digital presence.",
  ],
  services: [
    {
      icon: <FaRegChartBar />,
      title: "In-Depth Reputation Analysis",
      description:
        "We perform a comprehensive assessment to identify all positive and negative elements influencing your online reputation. Using these insights, we develop a tailored internet reputation management plan aimed at mitigating threats and building a brand image that you control.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Strategic Asset Development",
      description:
        "Following our analysis, we identify all existing business listings, social media profiles, blogs, and websites under your management. Our team then optimizes these properties and creates new ones where necessary, forming a solid foundation for sharing positive content throughout your campaign.",
    },
    {
      icon: <FaLaptop />,
      title: "High-Quality Content Creation",
      description:
        "Creating fresh, search-optimized content is crucial for effective online reputation management. We produce high-quality articles, biographies, blog posts, and guest contributions that enhance and reinforce your brand’s presence across all relevant Google search results.",
    },
  ],
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    paragraphColor: "text-gray-700", // Color for the paragraph text
  },
};

// Import necessary icons from react-icons
import { FaPhoneAlt } from "react-icons/fa";

// Data for Contact Section
export const contactSectionData = {
  icon: <FaPhoneAlt />, // Icon for the contact section
  heading: "Need Help Fixing Your Online Reputation?",
  phoneText: "Call us now at",
  phoneNumber: "(941) 584-5949",
  buttonText: "SCHEDULE A FREE CONSULTATION",
  styles: {
    backgroundColor: "bg-white", // Background color for the section
    iconColor: "text-green-600", // Color for the icon
    headingColor: "text-gray-900", // Color for the heading text
    phoneTextColor: "text-gray-700", // Color for the phone text
    phoneNumberColor: "text-green-600", // Color for the phone number
    buttonColor: "bg-green-600", // Background color for the button
    buttonTextColor: "text-white", // Text color for the button
    buttonHover: "hover:bg-green-700 transition-colors duration-300", // Hover effect for the button
  },
};

// Import necessary icons from react-icons

// Data for FAQ Section
export const faqSectionData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is ORM?",
      answer:
        "ORM stands for Online Reputation Management, which involves strategies and techniques to manage and improve your online reputation.",
    },
    {
      question: "What is a reputation management strategy?",
      answer:
        "A reputation management strategy involves managing how a business or individual is perceived online by influencing and monitoring online content.",
    },
    {
      question: "What is the first step in reputation management?",
      answer:
        "The first step in reputation management is to conduct a thorough analysis of your current online presence and identify areas that need improvement.",
    },
    {
      question: "How long does online reputation management take?",
      answer:
        "The time required for online reputation management varies based on the complexity of the issues and the desired outcomes, but it typically takes several months.",
    },
    {
      question: "Why is online reputation management important?",
      answer:
        "Online reputation management is important because it helps individuals and businesses maintain a positive image, build trust, and prevent or recover from negative publicity.",
    },
    {
      question: "How does reputation management work?",
      answer:
        "Reputation management works by monitoring online mentions, creating positive content, and suppressing or removing negative content to improve the overall perception.",
    },
    {
      question: "What does online reputation management cost?",
      answer:
        "The cost of online reputation management varies based on the services required and the provider, but it can range from a few hundred to several thousand dollars per month.",
    },
    {
      question: "Why should I invest in reputation management?",
      answer:
        "Investing in reputation management helps protect your personal or business brand, build trust with your audience, and prevent potential loss of revenue due to negative publicity.",
    },
    {
      question: "Is NetReputation a good company?",
      answer:
        "NetReputation is known for providing effective online reputation management services to both individuals and businesses, helping them improve their online image.",
    },
    {
      question: "Can reputation be managed?",
      answer:
        "Yes, reputation can be managed through proactive strategies like monitoring online mentions, creating positive content, and addressing negative feedback promptly.",
    },
  ],
  buttonLabel: "View All FAQ",
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    linkColor: "text-green-600", // Color for the Expand/Collapse links
    buttonColor: "bg-green-600", // Background color for the button
    buttonTextColor: "text-white", // Text color for the button
    buttonHover: "hover:bg-green-700 transition-colors duration-300", // Hover effect for the button
  },
};

// Import necessary icons from react-icons

// Data for Review Section
export const reviewSectionData = {
  title: "Excellent",
  rating: 4.8,
  totalReviews: 285,
  reviews: [
    {
      rating: 5,
      name: "Philip J. Berenz",
      date: "2 days ago",
      title: "This team is incredible",
      content: "This team is incredible. Cannot recommend more highly!",
    },
    {
      rating: 5,
      name: "Anonymous",
      date: "September 15",
      title: "Negative reviews were taken down within 1 week",
      content: "Negative reviews were taken down within 1 week.",
      reply: "Reply from NetReputation",
      replyDate: "5 days ago",
    },
    {
      rating: 5,
      name: "Michael Watts",
      date: "September 11",
      title: "I was Skeptical I have hired a company...",
      content:
        "I was Skeptical I have hired a company just like this before all they did was take my money. This company gave me instant results. Thank You Net Reputation.",
      reply: "Reply from NetReputation",
      replyDate: "September 12",
    },
    {
      rating: 5,
      name: "AST",
      date: "September 11",
      title: "Thank you to John Borkowski and his team...",
      content:
        "Thank you to John Borkowski and his team at NetReputation. They did exactly as promised and with no delay. I would not hesitate to recommend them to any business.",
    },
    {
      rating: 5,
      name: "Marie",
      date: "September 14",
      title: "Our new strategist Andrew was amazing",
      content:
        "Our new strategist Andrew was amazing. Not only did he recognize the issue at hand he responded quickly. There was follow up and availability that we really needed at this time in our journey. We appreciate the help.",
      reply: "Reply from NetReputation",
      replyDate: "5 days ago",
    },
    {
      rating: 5,
      name: "customer",
      date: "September 12",
      title: "Quick removal of 1-star ratings from bots",
      content:
        "We had several negative Google Reviews that were clearly not written by real people. Google failed to remove these when we flagged them, but NetReputation did so in a matter of a few days.",
      reply: "Reply from NetReputation",
      replyDate: "September 13",
    },
    {
      rating: 5,
      name: "Lauren T.",
      date: "September 10",
      title: "Great experience with Kayden Koch at NetReputation",
      content:
        "Hayden Koch has been a tremendous help with our case. Very professional and follows up weekly. Very happy with their work so far.",
    },
    {
      rating: 5,
      name: "William Koontz",
      date: "September 4",
      title: "I have been working with my dedicated...",
      content:
        "I have been working with my dedicated team for over 2 years, and these guys do a fantastic job. We’ve learned a lot from each other and developed a strong strategy to keep my reputation intact.",
    },
  ],
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    ratingColor: "text-gray-700", // Color for the rating text
  },
};

// Import necessary icons from react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Data for Footer Section
export const footerData = {
  logo: {
    part1: "ORM",
    part2: "DASH",
    tagline: "EXPERT REPUTATION MANAGEMENT",
  },
  contactInfo: {
    address: "Web Presence, LLC | 1100 N Tuttle Ave. Sarasota, FL 34237",
    phone: "(941) 584-5949",
    license: "E0465172014-0",
  },
  socialMedia: [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/" },
  ],
  links: [
    {
      title: "Business Services",
      items: [
        { name: "Reputation Management", url: "#" },
        { name: "Reputation Monitoring", url: "#" },
        { name: "Branding Solutions", url: "#" },
        { name: "Public Relations", url: "#" },
      ],
    },
    {
      title: "Individual Services",
      items: [
        { name: "Reputation Management", url: "#" },
        { name: "Reputation Monitoring", url: "#" },
        { name: "Internet Privacy", url: "#" },
        { name: "Branding", url: "#" },
      ],
    },
    {
      title: "Learn More",
      items: [
        { name: "Our Team", url: "#" },
        { name: "About Us", url: "#" },
        { name: "The Process", url: "#" },
        { name: "What Goes Into It", url: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "News and Press", url: "#" },
        { name: "Become an Affiliate", url: "#" },
      ],
    },
  ],
  styles: {
    backgroundColor: "bg-gray-900", // Background color for the footer
    textColor: "text-white", // Text color for the footer
    linkColor: "text-gray-400", // Link color for footer links
    socialIconColor: "text-gray-400", // Color for social media icons
    socialIconHoverColor: "text-green-500", // Hover color for social media icons
  },
};
