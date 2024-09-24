// FooterLinks.js
import React from "react";

const FooterLinks = ({ links, linkColor }) => {
  return (
    <div className="footer-links grid grid-cols-1 gap-8 md:grid-cols-4">
      {links.map((section, index) => (
        <div key={index} className="footer-section">
          <h3 className="mb-4 font-bold">{section.title}</h3>
          <ul>
            {section.items.map((item, i) => (
              <li key={i} className="mb-2">
                <a href={item.url} className={`${linkColor} hover:underline`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
