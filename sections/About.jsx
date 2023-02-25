import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { TypingText } from "../components/customText";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
      >
        <TypingText title={`| ${t("about")}`} textStyles="text-center" />
        <motion.p 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className={`${styles.about} text-[#c7c7c7]`}
        >
            <span className="font-extrabold text-white">{t("header1a")}</span> 
            {t("aboutIran")}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
