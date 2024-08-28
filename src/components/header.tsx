import logoImage from "/img/Logo-vectorized-bold-NoCircle.png"
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import { TfiMenu, TfiClose} from "react-icons/tfi";

export function Header (){
    const [navBtnPressed, setNavBtnPressed] = useState(false);

    return(
        <>
            <header className="w-full bg-muna-green flex justify-between items-center pb-2 fixed top-0 z-50">
                <AnimatePresence>
                    <motion.img src={logoImage} alt="logo van muna"                     
                    animate={{x : 0, opacity : 1}} 
                    initial={{x : -100, opacity: 0}}
                    transition={{type: "spring"}}
                    className="w-1/3 sm:w-1/6"/>
                </AnimatePresence>

                <ul className="hidden sm:flex sm:space-x-8 sm:justify-center sm:font-semibold sm:text-white mr-16">
                    <motion.li
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    >
                        <Link to='/home'>Home</Link>
                    </motion.li>
                    <motion.li
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    >
                        <Link to="/menu">Menu</Link>
                    </motion.li>
                    <motion.li
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    >
                        <Link to='/fotos'>Fotos</Link>
                    </motion.li>
                    <motion.li
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    >
                        <Link to='#'>Contact</Link>
                    </motion.li>
                </ul>
                <button className="text-white text-2xl sm:hidden mr-2" onClick={() => setNavBtnPressed(!navBtnPressed)}>
                    {navBtnPressed == true ? <TfiClose/> : <TfiMenu/>}
                </button>
            </header>

            <AnimatePresence>
                {navBtnPressed && (
                    <>
                    <motion.div 
                        className="fixed top-0 left-0 w-2/3 h-full bg-gray-700 rounded-r text-white p-2"
                        initial={{x:-500}}
                        animate={{x:0}}
                        transition={{type: "spring", stiffness: 100, damping: 20}}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <ul className="space-y-4 flex flex-col items-center mt-16">
                            <motion.li
                            whileTap={{scale: 0.9}}
                            >
                                <Link to='/home' onClick={() => setNavBtnPressed(false)}>Home</Link>
                            </motion.li>
                            <motion.li
                            whileTap={{scale: 0.9}}
                            >
                                <Link to="/menu" onClick={() => setNavBtnPressed(false)}>Menu</Link>
                            </motion.li>
                            <motion.li
                            whileTap={{scale: 0.9}}
                            >
                                <Link to='/fotos' onClick={() => setNavBtnPressed(false)}>Fotos</Link>
                            </motion.li>
                            <motion.li
                            whileTap={{scale: 0.9}}
                            >
                                <Link to='#' onClick={() => setNavBtnPressed(false)}>Contact</Link>
                            </motion.li>
                        </ul>
                    </motion.div>     
                    </>
 
                )}
            </AnimatePresence>

        </>
    )
}