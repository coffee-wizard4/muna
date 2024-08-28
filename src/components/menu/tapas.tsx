import { motion } from "framer-motion"
import { MdOutlineTapas } from "react-icons/md";
export default function Tapas(){

    const tapas = [
        {
          name: "Apero",
          price: "8€/pp",
          min_people: 5,
          description: "Mix van vlees, kazen, olijfjes, crackers, brood. Dit kan afwisselen volgens het marktaanbod en nieuwe creaties"
        },
        {
          name: "Moorse tapaschotel",
          price: "15€/pp",
          min_people: 10,
          description: "Mix van vlees, kazen, olijfjes, humus, mouhammara, olijven, organic olijfolie met zout (zwart of Keltisch of Himalaya), crackers, brood"
        },
        {
          name: "The world on your plate tapaschotel",
          price: "25€/pp",
          min_people: 15,
          description: "Mix van vlees, kazen, olijfjes, humus, mouhammara, olijven, organic olijfolie met zout (zwart of Keltisch of Himalaya), crackers, brood. Pulled porc, nacho’s met sausjes. Omdat dit aanbod vrij nieuw is kan het aanbod in de toekomst nog aangepast worden."
        }
      ];

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
          <div className="bg-tapas w-full py-20 rounded-xl shadow-lg shadow-slate-500">
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">Tapas</h2>
          </div>

          <h4 className="text-4xl my-4 p-2 font-semibold"><MdOutlineTapas className="m-auto"/></h4>
            <div className="m-auto grid grid-cols-1 md:grid-cols-2 mb-4">
                        {tapas.map((tapa, index) =>(
                            <div className="p-2" key={index}>
                                <h5 className="font-semibold italic">{tapa.name} {`(min ${tapa.min_people} personen)`}</h5>
                                <p className="text-sm italic mb-1">{tapa.description}</p>
                                <p className="font-semibold text-sm">{tapa.price}</p>
                            </div>
                        ))}
                    </div>
        </motion.div>
    )
}