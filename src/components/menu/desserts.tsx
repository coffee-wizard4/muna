import { motion } from "framer-motion"
import { LuDessert } from "react-icons/lu";
export default function Desserts(){
    const desserts = [
        {
          name: "Chocomousse",
          price: "5€/stuk",
          min_order: 8,
        },
        {
          name: "Panna cotta",
          description: "Panna cotta met amarena kersen en crumble van witte chocola en pistache noot",
          price: "7€/stuk",
          min_order: 8,
        },
        {
          name: "Fruitsalade",
          price: "seasonal",
          description: "Seizoensgebonden: zomer: nectarine, appel, mango, blauw bessen, frambozen, sausje van limoensap"
        },
        {
          name: "Lemon cheesecake",
          price: "22€"
        },
        {
          name: "Citroen meringue",
          price: "45€"
        }
      ];

    return (
        <>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
                <div className="bg-desserts w-full py-20 rounded-xl shadow-lg shadow-slate-500">
                  <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">DESSERTS</h2>
                </div>

                <h4 className="text-4xl my-4 p-2 font-semibold"><LuDessert className="m-auto"/></h4>
                <div className="m-auto grid grid-cols-1 md:grid-cols-2 mb-4">
                        {desserts.map((dessert, index) =>(
                            <div className="p-2" key={index}>
                                <h5 className="font-semibold italic">{dessert.name} {dessert.min_order && `(min ${dessert.min_order} stuks)`}</h5>
                                <p className="text-sm italic mb-1">{dessert.description}</p>
                                <p className="font-semibold text-sm">{dessert.price}</p>
                            </div>
                        ))}
                </div>
            </motion.div>
        </>
    )
}