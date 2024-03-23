import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  console.log("eded", projectCount);
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hello 👋🏻 I am, <br /> <span>Abhishekh</span> Kumar Yadav
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:3avu.yd@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          {/* <article>
                        <p>
                            +
                            {
                                ratio < 2 && (
                                    <motion.span
                                        whileInView={animationClientCount} ref={clientCount}
                                    ></motion.span>
                                )
                            }
                        </p>
                        <span>Clients Worldwide</span>
                    </article> */}
          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectCount}
                  >
                    10
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>3avu.yd@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        {/* <img src="https://media.licdn.com/dms/image/D4D03AQEWg_Bk8-2nJA/profile-displayphoto-shrink_800_800/0/1672115940700?e=1716422400&v=beta&t=T0ztEhY0rK-14YOjCUHPMYsvNRnis6Rjg4uV24P0lDA" alt="Abhishekh" /> */}
        <img src={me} alt="Abhishekh" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
