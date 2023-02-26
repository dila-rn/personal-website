import React, { useState } from "react";
import "../scss/LandingPage.scss";
import { Icon } from '@iconify/react';
import ThemeToggle from "./ThemeToggle";
import CardExperience from "./CardExperience";

function LandingPage() {
  const [theme, setTheme] = useState("light");
  const [themeToggleClicked, setThemeToggleClicked] = useState(false)

  const handleThemeToggle = () => {
    setThemeToggleClicked(!themeToggleClicked)
    setTheme(themeToggleClicked ? "light" : "dark");
  };


  console.log(theme)

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
      company: "Luvia",
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

  return (
    <div className={`landing-page ${theme}`}>
      <nav className="py-4 px-5 fixed-top">
        <div className="logo">drn</div>
        <div className="d-flex">
          <a href="/#about"><div className="px-5">About</div></a>
          <a href="/#experience"><div className="px-5">Experiences</div></a>
          <a href="/#project"><div className="px-5">Projects</div></a>
          <ThemeToggle theme={theme} handleThemeToggle={handleThemeToggle} />
        </div>
      </nav>

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
            <a href={process.env.PUBLIC_URL + '/documents/CV-ATS-Dila Rizvina N-2023.pdf'}
            >
              <button>
                Check out my resume!
              </button>
            </a>
          </section>
        </main>

        <section id="about">
          <div>
            <h2 className="textTitle">About Me</h2>
            <div className="row flex-column-reverse flex-md-row">

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
          <h2 className="textTitle d-flex justify-content-center">Experiences</h2>
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

      <section id="project">
          <h2 className="textTitle">Projects</h2>
          

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
