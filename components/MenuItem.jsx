import { motion } from "framer-motion";

const MenueItems = () => {
  return (
    <motion.ul
      className="mt-32 z-20"
      variants={{
        open: {
          transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
        closed: {
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      <motion.li
        className="my-8 text-[20px] font-bold "
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex justify-center">HOME</div>
      </motion.li>
      <motion.li
        className="py-8  text-[20px] font-bold cursor-pointer"
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex justify-center cursor-pointer">ABOUT US</div>
      </motion.li>
      <motion.li
        className="py-8"
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div>ddsfsf</div>
      </motion.li>
    </motion.ul>
  );
};

export default MenueItems;
