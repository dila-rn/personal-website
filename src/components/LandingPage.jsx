import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../scss/LandingPage.scss";
import { Icon } from '@iconify/react';
import ThemeToggle from "./ThemeToggle";
import CardExperience from "./CardExperience";
import CardProject from "./CardProject";

function LandingPage() {
  const [theme, setTheme] = useState("dark");
  const [themeToggleClicked, setThemeToggleClicked] = useState(false)

  const handleThemeToggle = () => {
    setThemeToggleClicked(!themeToggleClicked)
    setTheme(themeToggleClicked ? "dark" : "light");
  };

  const experiences = [
    {
      id: 1,
      company: "SYNRGY Academy",
      role: "Full-stack Web Development Scholarship Awardee",
      duration: "Jul 2022 - Feb 2023",
      description: {
        0: "SYNRGY Academy is a collaboration program between BCA and Binar Academy in the form of online bootcamp scholarship.",
        1: "During 6 months of intensive online bootcamp class, i learned about basic fullstack web development, such as responsive web design, Javascript OOP, DOM manipulation, RESTful API HTTP Server, building websites using ReactJS and NextJS, and deployment using Railway.app and Vercel",
        2: "Worked on final project with 18 team members and given the opportunity to be the Project Manager"
      }
    },

    {
      id: 2,
      company: "LUVIA",
      role: "Graphic Designer",
      duration: "Apr 2022 - Jun 2022",
      description: {
        0: "Made any graphic design needs for LUVIA Hijab, especially for LUVIA and LUVKID brand, such as graphic design for social media promotion, catalogue, and merchandise.",
        1: "Took a part for product photography, photo editing and video editing for social media contents."
      }
    },

    {
      id: 3,
      company: "PT Pertamina (Persero) RU VI Balongan",
      role: "Maintenance Execution Intern",
      duration: "Jan 2021 - Feb 2021",
      description: {
        0: "Focused on Residue Catalytic Cracker Unit (RCC) to study about catalyst level control in a regenerator",
      }
    },

    {
      id: 4,
      company: "DTETI FT UGM",
      role: "Laboratory Assistant of Digital and Microprocessor",
      duration: "Oct 2020 - Dec 2020",
      description: {
        0: "I was responsible for assisting the students to do lab works and simulations, such as Combinatorial Logic circuit, Digital Aritmethic, Digital I/O Microprocessor, and Analog I/O Microprocessor.",
        1: "Evaluated the students lab reports."
      }
    },
  ]

  const projects = [
    {
      id: 0,
      type: "Collaboration Project",
      name: "Omah Kos Web Platform",
      description: "With a duration of 1.5 months, Our team was dedicated to creating an easy-to-use and visually appealing platform, equipped with detailed facility explanations and photos of the houses, allowing landlords and seekers to conduct transactions directly within the platform. ",
      image: "/images/omah-kos.jpeg",
      link: "https://github.com/dila-rn/omah-kos",
      stack: {
        0: "Next.js",
        1: "Bootstrap",
        2: "Sass",
        3: "Firebase",
        4: "Vercel"
      }
    },
    {
      id: 1,
      type: "Personal Project",
      name: "Car Rental Platform",
      description: "I had the opportunity to take up the challenge of building a platform for car rental that filters cars based on their type, availability, and capacity. This was a challage project that required both front-end and back-end development skills from bootcamp course i joined.",
      image: "/images/bcr.jpeg",
      link: "https://github.com/dila-rn/BCR-single-page-project-using-reactjs",
      stack: {
        0: "React.js",
        1: "Bootstrap",
        2: "CSS",
        3: "RESTful API",
        4: "Express.js",
        5: "Sequilize",
        6: "Vercel"
      }
    },
    {
      id: 2,
      type: "Personal Project",
      name: "drn - Personal Website",
      description: "Building my personal website was a challenging and rewarding project that allowed me to showcase my skills as a developer. To begin, I identified my goals for the website and determined the key features that I wanted to include, such as my self-introduction, experiences, and contact information. I then created a design with two color modes that was both visually appealing and easy to navigate, ensuring that visitors could easily find the information they were looking for.",
      image: "/images/personal-website.png",
      link: "https://github.com/dila-rn/personal-website",
      stack: {
        0: "React.js",
        1: "Bootstrap",
        2: "Sass",
        3: "Vercel",
      }
    },
  ]

  return (
    <div className={`landing-page ${theme}`}>
      {/* <nav className="py-4 px-5 fixed-top">
        <div className="logo">drn</div>
        <div className="d-flex">
          <a href="/#about"><div className="px-5">About</div></a>
          <a href="/#experience"><div className="px-5">Experiences</div></a>
          <a href="/#project"><div className="px-5">Projects</div></a>
          <ThemeToggle theme={theme} handleThemeToggle={handleThemeToggle} />
        </div>
      </nav> */}

      <Navbar expand="lg" fixed="top" className="px-5 nav">
        <Navbar.Brand href="/">

          <picture className="d-flex align-items-center justify-content-center">
            {theme === "light" ?
              <img src={process.env.PUBLIC_URL + '/images/dila-v2-transparent.png'} alt="dila-logo" width={28} />
              :
              <img src={process.env.PUBLIC_URL + '/images/dila-v1-transparent.png'} alt="dila-logo" width={28} />
            }
          </picture>
        </Navbar.Brand>
        {theme === "dark" ? <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" /> :
          <Navbar.Toggle aria-controls="basic-navbar-nav" />}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="/#about" className="ps-5 py-3">About</a>
            <a href="/#experience" className="ps-5 py-3">Experiences</a>
            <a href="/#project" className="ps-5 py-3">Projects</a>
            <Nav.Item className="ps-5 py-3">
              <ThemeToggle theme={theme} handleThemeToggle={handleThemeToggle} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div orientation="left" className="social-media">
        <ul>
          <li>
            <a href="https://github.com/dila-rn"
              target="_blank"
              rel="noreferrer">
              <Icon icon="bi:github" width="30" height="30" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/dilarizvinan/"
              target="_blank"
              rel="noreferrer">
              <Icon icon="uil:linkedin" width="30" height="30" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/dila.rn/"
              target="_blank"
              rel="noreferrer">
              <Icon icon="uil:instagram-alt" width="30" height="30" />
            </a>
          </li>

          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dilarnataisha@gmail.com"
              target="_blank"
              rel="noreferrer">
              <Icon icon="mdi:gmail" width="30" height="30" />
            </a>
          </li>
        </ul>
      </div>

      <div orientation="right" className="section-title">
        <p className="textSM">Personal Website - Dila Rizvina N - 2023 </p>
      </div>

      <div id="content" className="p-5">
        <main className="d-flex flex-column justify-content-center">
          <section>
            <h2 className="textSubtitle">Front-end Web Development Enthusiast</h2>
            <h1 className="textXL">Dila Rizvina Nataisha</h1>
            <p className="textReg">
              I graduated as a Bachelor of Electrical Engineering from Universitas Gadjah Mada, but here i am, pursuing my career in Web Development based on my interest and passion :D
            </p>
            <a href={process.env.PUBLIC_URL + '/documents/CV-ATS-Dila Rizvina N-2023.pdf'}>
              <button>
                Check out my resume!
              </button>
            </a>
          </section>
        </main>

        <section id="about">
          <div>
            <div className="d-flex align-items-center">
              <h2 className="textTitle pe-3">About Me</h2>
              <hr className="col-xl-9 col-md-6 col-lg-6 col-sm-6 section-line" />
            </div>

            <div className="row flex-column-reverse flex-md-row py-4">
              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">
                <p className="self-desc my-3 pe-4 textSM ">
                  Hi, my name is Dila. I'm a electrical engineering fresh graduate who took a big step outside of my major to pursue my passion for <span>web development and design.</span> I am a self-starter who is passionate about graphic design and developing visually stunning and user-friendly websites.
                  <br />
                  <br />
                  <span>I started my journey for Web Development in 2022</span> when I was chosen as scholarship awardee for Full-stack Web Development bootcamp program, and since then, I have been completely immersed in the world of web development and I am always seeking new challenges to improve my skills and knowledge.
                  <br />
                  <br />
                  Some of my strengths are my ability to <span> think creatively and problem-solve.</span> I enjoy taking complex concepts and breaking them down into manageable steps, which allows me to approach projects in a systematic and efficient way.
                  <br />
                  <br />
                  When I'm not coding or designing, you can usually find me <span>exploring the outdoors or experimenting in the kitchen.</span>  I believe that a healthy work-life balance is essential, and I try to make time for the things that bring me joy and fulfillment.
                  <br />
                  <br />
                  Overall, I am excited about the future of web development, and <span>I can't wait to see where this journey takes me.</span>
                </p>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 my-4">
                <div className="picture-wrapper">
                  <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="py-4 d-flex align-items-center justify-content-center">
            <hr className="col-2 section-line" />
            <h2 className="textTitle px-4">Experiences</h2>
            <hr className="col-2 section-line" />
          </div>
          <div className="px-4 py-3">
            <div className="row">
              {experiences.map(item => (
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={item.id}>
                  <CardExperience
                    company={item.company}
                    role={item.role}
                    duration={item.duration}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section id="project" >
        <div className="d-flex justify-content-center align-items-center">
          <hr className="col-2 section-line" />
          <h2 className="textTitle px-4">Projects</h2>
          <hr className="col-2 section-line" />
        </div>

        <div className="">
          {projects.map(item => (
            <div className="" key={item.id}>
              <CardProject
                id={item.id}
                type={item.type}
                name={item.name}
                link={item.link}
                image={item.image}
                description={item.description}
                stack={item.stack}
              />
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="social-media-footer">
          <a href="https://github.com/dila-rn"
            target="_blank"
            rel="noreferrer">
            <Icon icon="bi:github" width="30" height="30" />
          </a>

          <a href="https://www.linkedin.com/in/dilarizvinan/"
            target="_blank"
            rel="noreferrer">
            <Icon icon="uil:linkedin" width="30" height="30" />
          </a>

          <a href="https://www.instagram.com/dila.rn/"
            target="_blank"
            rel="noreferrer">
            <Icon icon="uil:instagram-alt" width="30" height="30" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dilarnataisha@gmail.com"
            target="_blank"
            rel="noreferrer">
            <Icon icon="mdi:gmail" width="30" height="30" />
          </a>
        </div>
        <p>&copy; 2023 Dila Rizvina Nataisha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
