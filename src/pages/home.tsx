import { TbSalad as Fresh } from "react-icons/tb";
import { ImLocation2 as Location } from "react-icons/im";
import { AiOutlineSmile as Smile} from "react-icons/ai";
import { motion } from "framer-motion";
import  zahra  from "/img/zarah_prepareert.jpg"
import Reviews from "../components/reviews/reviews";


export default function Home() {

    const container = {
        hidden:{opacity: 0},
        visible:{opacity: 1, transition:{staggerChildren:0.3}}
    }
    const variants = {
        visible:{opacity: 1, scale: 1},
        hidden:{opacity:0, scale: 0.9}
    }

    return(
    <>
        <main className="w-full">
            <div className=" w-full landing-page-home h-screen flex items-center justify-center bg-cover md:bg-fixed">
                <h1 className="w-full text-center text-5xl align-middle text-white font-semibold">De wereld kan smaken!</h1>
            </div>

            <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="m-auto grid grid-cols-1  md:grid-cols-3 my-16 space-y-8 md:space-y-0">

                <motion.div 
                variants={variants}
                className="w-4/5 m-auto shadow-lg shadow-slate-600 rounded-b">
                        <div className="w-full rounded-t bg-secondary p-2">
                            <Fresh className="text-4xl  m-auto"/>
                            <p className="text-xl font-bold text-center">Fresh</p>
                        </div>
                        <p className="text-center p-4">Elk gerecht wordt huisbereid met de meest verste ingrediënten.</p>
                </motion.div>

                <motion.div
                variants={variants}
                className="w-4/5 m-auto shadow-lg shadow-slate-600 rounded-b">
                        <div className="w-full rounded-t bg-secondary p-2">
                            <Location className="text-4xl  m-auto"/>
                            <p className="text-xl font-bold text-center">Local</p>
                        </div>
                        <p className="text-center p-4">Wij kiezen voor pure, kwaliteitsvolle producten van Belgische bodem.</p>
                </motion.div>

                <motion.div 
                variants={variants}
                className="w-4/5 m-auto shadow-lg shadow-slate-600 rounded-b">
                        <div className="w-full rounded-t bg-secondary p-2">
                            <Smile className="text-4xl  m-auto"/>
                            <p className="text-xl font-bold text-center">Delicious</p>
                        </div>
                        <p className="text-center p-4">Eet smakelijk en verras iedereen met de lekkere gerechten van Muna!</p>
                </motion.div>
            </motion.div>

            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 my-16 text-justify">
                <h3 className="md:col-span-2 text-4xl mb-8 font-bold text-center border-b-2">Nood aan iets lekkers voor jouw evenement?</h3>
                <div className="w-4/5 mx-auto text-center sm:text-left">
                    <h4 className="mb-2 font-semibold">Geen probleem, want Muna neemt je mee op een culinaire wereldreis!</h4>
                    <p className="text-sm mb-8">Zahra Wolfs is de oprichtster en chefkok van Muna. Het doel van Muna is om haar klanten te voorzien van gezond eten dat ze niet snel zullen vergeten. En daarvoor haalt Zahra inspiratie uit haar vele reiservaringen. Het resultaat is een zeer diverse lunchkaart met invloeden van over de hele wereld.</p>
                    
                    <h4 className="mb-2 font-semibold">Bij Muna vind je gezonde en kwaliteitsvolle gerechten met diverse ingrediënten.</h4>
                    <p className="text-sm mb-2">De smaakvolle combinaties bij Muna vinden hun oorsprong in Zahra’s levenslange passie voor koken. Van kinds af aan roerde Zahra in de potten, waarna ze op latere leeftijd een koksdiploma behaalde.</p>
                    <p className="italic text-sm">“Ik kook voor jou zoals ik voor mijn familie en vrienden kook: met liefde, passie en respect.” – Zahra Wolfs</p>
                </div>
                <img src={zahra} alt="zahra legt broodjes op tafel" className="w-4/5 rounded shadow-slate-600 shadow-lg mt-4 m-auto md:m-0 text-center" />
            </div>

            <Reviews/>
        </main>
    </>
    )
}