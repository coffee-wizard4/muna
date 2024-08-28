import { useMemo, useState } from "react";
import ReviewCard from "./reviewcard"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";


export default function Reviews() {
    const reviews = [
        `heylaba, \n super dikke merci, het was super lekker en genoeg, feta en meloen was zeer lekker, zeker bij voegen! Fijne dag grtz`,
        "Goeie morgen, graag wil ik je bedanken voor de mooie kaart en rijstpapjes. De broodjes waren super. Dikke merci. Groetjes, Mich.",
        "Sorry voor de late reactie. Alvast bedankt voor de snelle service. Het heeft ons enorm gesmaakt. \n MVG Wesley JYSK BELGIUM \n PS:de broodjes waren echt subliem!",
        "Dat was weer genieten, heerlijk soepje, dikke merci hiervoor",
        "Nog eens bedankt voor de broodjes heb enkel goeie dingen gehoord van de gasten echt goed!",
        "Goede morgen Mevr. Zahra, het was niet alleen perfect, het was héél lekker, het was heel mooi gepresenteerd en het was top. Hartelijk dank en groetjes, Huguette",
        "Het was keigoed!  veel complimenten gekregen. Superblij mee",
        "Ze waren zeer tevreden over de salades! fijn weekend!",
        "Iedereen vond het heel lekker. X",
        "Hallo Zahra, dat was echt weer tip top. De licht pikante toets was verrassend en super geslaagd. De salades smaakten ook goed af. Echt een heel tof concept!!!",
        "Alles was dik in orde Zahra!",
        "Het waren echt fantastisch lekkere broodjes en soep!!! Iedereen was enthousiast! Dikke dikke pluim! En het feestje was heel leuk en gezellig... Heel erg bedankt",
        "De broodjes waren echt heerlijk, kraakvers en met liefde gemaakt... dat smaakt We komen zeker terug!",
        "Heerlijke broodjes en dikke merci voor het kaartje en donut, was een geslaagde lunch!",
        "Wij hebben zo lekker gegeten, top",
        "Lekker gegeten... nog eens bedankt",
        "Wauw! Super lekkere soep!",
        "Jij bedankt voor de lekkere broodjes. Is aanrader"
    ]

    const [currentReview, setCurrentReview] = useState(0);

    const revcards = useMemo(() => {
        const endIndex = Math.min(currentReview + 3, reviews.length - 1);
        return reviews.slice(currentReview, endIndex);
      }, [currentReview, reviews]);

    function NextReview() {
        setCurrentReview((prev) => prev + 3 >= reviews.length ? 0 : prev + 3)
    }

    function PreviousReview(){
        setCurrentReview((prev) => prev - 3 < 0 ? reviews.length - 3 : prev - 3)
    }

    const container = {
        visible:{opacity: 1, transition:{staggerChildren:0.3}},
        hidden:{opacity: 0}
    }

    return(
        <>
            <div className="container m-auto  mt-16 hidden md:block">
                <h3 className="text-4xl border-b-2 text-center font-bold mb-8">Onze reviews</h3>
                <div className="flex">
                    <motion.button 
                    className="bg-secondary text-white w-10 rounded-full h-10 text-2xl font-bold m-auto" onClick={() => PreviousReview()}
                    whileTap={{scale: 0.9}}
                    >
                        <MdOutlineArrowBackIos/>
                    </motion.button>

                    <motion.div 
                    className="relative h-96 w-full flex flex-col justify-center overflow-hidden"
                    variants={container}
                    animate="visible"
                    initial="hidden"
                    >
                        {revcards && 
                            <AnimatePresence>
                                {revcards.map((revcard, index) => (
                                    <ReviewCard key={`${revcard}-${index}`} review={revcard}/>
                                ))}
                            </AnimatePresence>  
                        }       
    
   
                    </motion.div>

                    <motion.button 
                    className="bg-secondary text-white w-10 rounded-full h-10 text-2xl font-bold m-auto" onClick={() => NextReview()}
                    whileTap={{scale: 0.9}}
                    >
                        <MdOutlineArrowForwardIos/>
                    </motion.button>
                </div>                
            </div>
        </>
    )
}