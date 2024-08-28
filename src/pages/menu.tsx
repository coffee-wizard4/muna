import { useState } from "react"
import {AnimatePresence, motion} from "framer-motion"
import Broodjes from "../components/menu/broodjes";
import Salades from "../components/menu/salades";
import Tapas from "../components/menu/tapas";
import Hoofdgerechten from "../components/menu/hoofdgerechten";
import Desserts from "../components/menu/desserts";

export default function Menu(){

    const [currentMenu, setCurrentMenu] = useState("broodjes");

    function getButtonStyling(menu : string){
        return currentMenu === menu ? "rounded p-2 bg-secondary text-white" : "rounded p-2 border"
    }
    
    return(
    <>
        <main className=" container m-auto mt-28">
            <h1 className="text-4xl font-semibold border-b-2 text-center">Menu</h1>
            <div className="space-x-10 text-center my-8 hidden sm:block">
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={getButtonStyling("broodjes")} onClick={() => setCurrentMenu("broodjes")}>Broodjes</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={getButtonStyling("salades & tapas")} onClick={() => setCurrentMenu("salades & tapas")}>Salades & Tapas</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={getButtonStyling("hoofdgerechten")} onClick={() => setCurrentMenu("hoofdgerechten")}>Hoofdgerechten</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={getButtonStyling("desserts")} onClick={() => setCurrentMenu("desserts")}>Desserts</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={getButtonStyling("tapamenus")} onClick={() => setCurrentMenu("tapamenus")}>Tapa Menus</motion.button>
            </div>

            <div className="flex justify-center sm:hidden mt-4 text-l focus:outline-none focus:ring-2 focus:ring-blue-500">
                <select value={currentMenu} className="rounded border p-2" onChange={(event) => setCurrentMenu(event.target.value)}>
                    <option value="broodjes">Broodjes</option>
                    <option value="salades & tapas">Salades & Tapas</option>
                    <option value="tapas">Tapas</option>
                    <option value="hoofdgerechten">Hoofdgerechten</option>
                    <option value="desserts">Desserts</option>
                </select>                
            </div>
            <AnimatePresence>
                {currentMenu === "broodjes" && <Broodjes/>}
                {currentMenu === "salades & tapas" && 
                <>
                    <Salades/>
                    <Tapas/>          
                </>

                }
                {currentMenu === "hoofdgerechten" && <Hoofdgerechten/>}
                {currentMenu === "desserts" && <Desserts/>}
                {currentMenu === "tapamenus" && <>helo</>}
            </AnimatePresence>
        </main>
    </>
    )
}