import { motion } from "framer-motion"
import { PiBowlFoodDuotone } from "react-icons/pi";
export default function Hoofdgerechten(){
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div className="bg-hoofdgerechten w-full py-20 rounded-xl shadow-lg shadow-slate-500">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">Hoofdgerechten</h2>
            </div>

            <div className="mt-8">
                <h4 className="text-4xl my-4 p-2 font-semibold"><PiBowlFoodDuotone className="m-auto"/></h4>
            </div>

            <div className="border-b p-2">
                <div className="m-auto sm:w-1/2 space-y-4">
                    <div>
                        <h5 className="font-semibold italic">Moors</h5>
                        <p>kan met couscous (warm) of tabouleh met groentjes koud: extra 5€ extra</p>
                    </div>

                    <div>
                        <h5 className="font-semibold italic">Aziatisch</h5>
                        <p>rijst 5€/extra gebakken rijst met groentjes: 7€</p>
                    </div>

                    <div>
                        <h5 className="font-semibold italic">Italiaans</h5>
                        <p>meestal met olie, chili, peterselie, look 6€ extra</p>
                    </div>
                </div>
            </div>

            <h4 className="text-2xl text-center font-semibold my-4">Hoofdgerechten met:</h4>
            <div className="bg-secondary shadow-lg shadow-slate-600 p-4 rounded-lg text-white sm:w-1/2 m-auto my-4">
                <p>Eventueel andere vissoorten of vleessoorten op aanvraag.</p>
                <p>Alle gerechten zijn inclusief brood.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
                <p className="font-semibold">Scampi (6 stuks): €20</p>
                <p className="font-semibold">Scampi (8 stuks): €25</p>
                <p className="font-semibold">Rund: €35</p>
                <p className="font-semibold">Kip: €24</p>
                <p className="font-semibold">Lam: dagprijs</p>
                <p className="font-semibold">Zeeduivel: dagprijs</p>
            </div>
        </motion.div>
    )
}