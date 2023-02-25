import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import logoImage from "../../public/logoImage.png";
import "../../styles/globals.css";
import i18next from "i18next";
import { useState } from "react";
import MenueItems from "../MenuItem";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} relative py-6 z-10`}
      >
        <div className="flex justify-between">
          <div className=" absolute w-[50%] inset-0 gradient-01" />
          <div className="w-[50px] h-[50px] flex justify-center z-10">
            <button className={`${styles.navIcons} text-[25px] z-30`}>
              <RiSearchLine />
            </button>
          </div>
          <div className="pt-2 flex ">
            <img src={logoImage} alt="" className="h-[36px]" />
            <p className="font-extrabold self-center leading-[30px] text-[24px] ">
              TOURMAN
            </p>
          </div>
          <div className="w-[50px] h-[50px] flex justify-center z-30">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.navIcons} text-[28px] `}
            >
              {i18next.language === "en" ? <CgMenuRight /> : <CgMenuLeft />}
            </button>
          </div>
        </div>
      </motion.nav>
      <motion.nav
        initial={false}
        variants={{}}
        animate={isMenuOpen ? "open" : "closed"}
        className=" fixed z-30  flex justify-center w-full h-full  "
      >
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            closed: {
              opacity: 0,
              y: -40,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
            open: {
              opacity: 1,
              y: -95,
              transition: {
                type: "spring",
                stiffness: 80,
              },
            },
          }}
          className=" w-full  flex justify-center z-20"
        >
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`fixed z-10 w-full h-[100%] bg-black bg-opacity-95`}
          />

          <div className={`absolute z-20 ${i18next.language==="en" ? "right-16" : "left-16"} top-5 w-[50px] h-[50px] flex justify-center`}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.navIcons} hover:bg-slate-50 hover:bg-opacity-10 text-[32px] `}
            >
              <HiXMark />
            </button>
          </div>
          <MenueItems />
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
