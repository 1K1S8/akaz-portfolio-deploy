import logo from "../assets/akazLogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";


const iconVariants = (duration)=>({
  intial: {y:-10},
  animate: {
    y:[10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
});

const Navbar = () => {
  return( 
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
         <img className="mx-2 w-10" src={logo} alt="logo"/>
      </div> 
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://www.linkedin.com/in/akash-m-061aa224b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-2xl text-blue-400" ><FaLinkedin/></a>
      </motion.div>
      <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://github.com/1K1S8"><FaGithub/></a>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-2xl text-pink-400"><FaInstagram/></a>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
        <a href="https://x.com/i/flow/login"><FaSquareXTwitter/></a>
        </motion.div>
      

      {/* 
      </motion.div>
      <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
          <FaLinkedin className="text-2xl text-blue-400"/>
      </motion.div>
      <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-2xl text-black-400"/>
      </motion.div>
      <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
            <FaInstagram className="text-2xl text-pink-400"/>
      </motion.div>
      <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          classname="rounded-2xl border-4 border-neutral-800 p-4">
            <FaSquareXTwitter className="text-2xl text-black-400"/>
      </motion.div> */}
        {/* <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
         */}
      </div>
  </nav>     
  );
};

export default Navbar;

