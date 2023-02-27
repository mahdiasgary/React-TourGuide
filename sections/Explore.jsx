
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/customText';
import ExploreCard from '../components/ExploreCard';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const { t } = useTranslation();

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("header1a")}`} textStyles="text-center" />
        <TitleText
          title={`${t('followUs')}`}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
              
            />
          ))}
        </div>
       
      </motion.div>
    </section>
  );
};

export default Explore;
