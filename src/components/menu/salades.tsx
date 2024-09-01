import { motion } from "framer-motion"
import { LuSalad } from "react-icons/lu";
export default function Salades(){
    
    const salads = [
        {
          name: "Tonijnsalade klassiek",
          ingredients: "tonijn in olie, eitje, sla, tomaat, komkommer, brood",
          price: "15€"
        },
        {
          name: "Tonijnsalade Muna",
          ingredients: "tonijn met stukjes rode ui, groen boontjes, olijfjes, sla, komkommer, tomaat, brood",
          price: "17€"
        },
        {
          name: "Griekse salade",
          ingredients: "feta, rode ui, olijfjes, kruidenmengeling, sla, tomaat, komkommer, brood",
          price: "15€"
        },
        {
          name: "Mexicaanse salade",
          ingredients: "rundsgehakt met Mexicaanse kruiden, sla, tomaat, cheddar, maïs, huisdressing",
          price: "20€"
        },
        {
          name: "Aziatische salade",
          ingredients: "kippengehakt met Aziatische kruiden, tomaat, sla, opgelegde rode ui, noedels",
          price: "17€"
        },
        {
          name: "Argentijnse kip",
          ingredients: "kip met Argentijnse kruiden, sla, tomaat, komkommer, maïs, brood",
          price: "17€"
        }
      ];

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div className="bg-salades w-full py-20 rounded-xl shadow-lg shadow-slate-500">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">Salades</h2>
            </div>

            <h4 className="text-4xl my-4 p-2 font-semibold"><LuSalad className="m-auto"/></h4>
            <div className="m-auto grid grid-cols-1 md:grid-cols-2 mb-4">
                        {salads.map((salad, index) =>(
                            <div className="p-2" key={index}>
                                <h5 className="font-semibold italic">{salad.name}</h5>
                                <p className="text-sm italic mb-1">{salad.ingredients}</p>
                                <p className="font-semibold text-sm">{salad.price}</p>
                            </div>
                        ))}
                    </div>
        </motion.div>
    )
}