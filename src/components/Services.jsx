import React from "react";
import "./Services.css";
import {
  Camera,
  Heart,
  Video,
  Image,
  Baby,
  Users,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const servicesData = [

  {
    title: "Wedding & Engagement",
    icon: <Heart size={24} />,
    image:
      "https://i.pinimg.com/736x/e2/bf/3d/e2bf3d6020b1ff1da5d57d28c6df2e17.jpg",
    desc: "Capturing emotions, rituals, and timeless memories with cinematic perfection.",
  },

  {
    title: "Bridal Photography",
    icon: <Sparkles size={24} />,
    image:
      "https://i.pinimg.com/736x/75/dd/b7/75ddb7b9e8fe23a5456de38eb3544530.jpg",
    desc: "Elegant bridal portraits crafted with luxury styling and cinematic beauty.",
  },

  {
    title: "Couples Photography",
    icon: <Heart size={24} />,
    image:
      "https://i.pinimg.com/webp85/1200x/17/e2/36/17e236e66ba5c2a7f5b9661711a1e16e.webp",
    desc: "Romantic couple shoots that beautifully preserve chemistry and emotions.",
  },

  {
    title: "Baby Photography",
    icon: <Baby size={24} />,
    image:
      "https://i.pinimg.com/736x/37/f5/fd/37f5fdb837363af5cdacd0d35ab42324.jpg",
    desc: "Cute, dreamy, and heartwarming baby portraits with premium editing.",
  },

  {
    title: "Children Photography",
    icon: <Baby size={24} />,
    image:
      "https://i.pinimg.com/webp85/736x/76/31/48/7631488652496921a8e61aef136fffaa.webp",
    desc: "Natural and playful captures filled with innocence, joy and happiness.",
  },

  {
    title: "Maternity & Newborn",
    icon: <Heart size={24} />,
    image:
      "https://i.pinimg.com/webp85/1200x/c1/81/05/c18105757cdf692e6b644a915675dc77.webp",
    desc: "Beautiful maternity and newborn moments captured with warmth and care.",
  },

  {
    title: "Portrait Photography",
    icon: <Camera size={24} />,
    image:
      "https://i.pinimg.com/736x/14/5e/00/145e00017a4c30c3dd5c37da4240db10.jpg",
    desc: "Luxury portrait sessions crafted with artistic lighting and storytelling.",
  },

  {
    title: "Model Book Photography",
    icon: <Camera size={24} />,
    image:
      "https://i.pinimg.com/1200x/c3/f9/30/c3f93040be63250106d8e2af9aeb507b.jpg",
    desc: "Professional portfolio shoots for models, influencers and artists.",
  },

  {
    title: "Family & Group",
    icon: <Users size={24} />,
    image:
      "https://i.pinimg.com/webp85/1200x/69/f3/90/69f39053ac576938a0666d25dd50dcbd.webp",
    desc: "Beautiful family frames that preserve love and togetherness forever.",
  },

  {
    title: "Events & Parties",
    icon: <Sparkles size={24} />,
    image:
      "https://i.pinimg.com/webp85/1200x/9c/c7/9c/9cc79c9df10e08be1d0d8d3c6e1e71c5.webp",
    desc: "Professional event coverage with elegant candid moments and highlights.",
  },

  {
    title: "Commercial Photography",
    icon: <Camera size={24} />,
    image:
      "https://i.pinimg.com/webp85/736x/d7/65/df/d765df0b5bd2de2d6794f096b9c05d4e.webp",
    desc: "Premium commercial shoots for brands, businesses and marketing campaigns.",
  },

  {
    title: "Graduation Photography",
    icon: <Sparkles size={24} />,
    image:
      "https://i.pinimg.com/1200x/29/c5/76/29c576f82bfe2144316af94f48d9d8f4.jpg",
    desc: "Celebrating achievements with stylish graduation portraits and memories.",
  },

  {
    title: "Fine-Art Photography",
    icon: <Image size={24} />,
    image:
      "https://i.pinimg.com/1200x/03/18/ae/0318aebfb4207fe94969cb0c8da3a629.jpg",
    desc: "Creative artistic photography with emotion, depth and visual storytelling.",
  },

  {
    title: "Black & White Photography",
    icon: <Image size={24} />,
    image:
      "https://i.pinimg.com/736x/ed/07/ae/ed07ae221b5bb893a4cbb73b96082934.jpg",
    desc: "Timeless monochrome photography focused on emotion and dramatic visuals.",
  },

  {
    title: "Videography Services",
    icon: <Video size={24} />,
    image:
      "https://i.pinimg.com/736x/36/72/8d/36728de34d183aaa7a48008b3c51bf0f.jpg",
    desc: "High-end cinematic videos for weddings, reels, commercials, and events.",
  },

  {
    title: "Photo Albums",
    icon: <Image size={24} />,
    image:
      "https://i.pinimg.com/webp85/1200x/d4/fd/0d/d4fd0d7893977ce0a859647a1c1a7472.webp",
    desc: "Premium quality albums designed with luxury layouts and memories.",
  },

  {
    title: "Photo Framing",
    icon: <Image size={24} />,
    image:
      "https://i.pinimg.com/1200x/c9/cd/d0/c9cdd08974f5f208eb2f0a4713595231.jpg",
    desc: "Elegant customized photo frames crafted to preserve your special memories.",
  },

  {
    title: "Photo Printing",
    icon: <Image size={24} />,
    image:
      "https://i.pinimg.com/1200x/ed/4c/8c/ed4c8cd2439709c33a5f8386da6a6ada.jpg",
    desc: "High-quality premium photo printing with rich colors and sharp details.",
  },

];

const Services = () => {
return (
  <section className="services-section" id="services">

    <div className="services-container">

      {/* HEADING */}
      <div className="services-heading">

        <p className="services-subtitle">
          PREMIUM SERVICES
        </p>

        <h2>
          Crafted for couples who <span>Value Emotions</span> over Trends
        </h2>

        <div className="heading-line"></div>

      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        {servicesData.map((service, index) => (

          <div
            className="service-card"
            key={index}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >

            {/* DARK OVERLAY CONTENT */}
            <div className="service-overlay">

              {/* TOP */}
              <div className="service-top">

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>

              {/* BOTTOM CONTENT */}
              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.desc}
                </p>
    
                <NavLink to="/album">
                  <button className="service-btn">
                    Explore →
                  </button>
                </NavLink>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>
);
};

export default Services;