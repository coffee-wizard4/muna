import { motion } from "framer-motion"
import { GiMeat } from "react-icons/gi";
import { GiChickenLeg } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import { BiCheese } from "react-icons/bi";
import { IoFish } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";

export default function Broodjes(){

    const vleesminis = [
        {
            name: "Italiaans gehaktbrood",
            ingredients: "tapenade van zongedroogde tomaten, huisgemaakt gehaktbrood, mozzarella, rucola",
            description: "Ik gebruik de rucola als kruid dus deze is subtiel aanwezig zodat de andere smaken nog door komen.",
            price: "4.60€"
        },
        {
            name: "Klassiek gehaktbrood",
            ingredients: "huisgemaakt gehaktbrood, mosterd, ketchup, sla, tomaat",
            price: "4.20€"
        },
        {
            name: "Italiaanse préparé",
            ingredients: "huisgemaakte préparé, truffel mayo, Parmezaan kaas, rucola",
            price: "4.50€"
        },
        {
            name: "Préparé natuur",
            ingredients: "huisgemaakte préparé",
            price: "4.00€"
        },
        {
            name: "Rosbief (min. 24 stuks)",
            ingredients: "Rosbief, mierikswortel mayo, witloof stukjes",
            price: "5.10€"
        }
    ]

    const vegiminis = [
        {
            "name": "Vegan feta",
            "ingredients": "Vegan feta, spread van zongedroogde tomaten, rucola",
            "price": "4.10€"
          },
          {
            "name": "Eiersalade",
            "ingredients": "huisgemaakte eiersalade",
            "extras": "tuinkers",
            "extra_price": "0.20€",
            "price": "3.80€"
          },
          {
            "name": "Gegrilde groenten, hummus",
            "ingredients": "gegrilde groenten, hummus",
            "quantity": "min. 24 stuks",
            "price": "4.80€"
          }
    ]

    const kaasminis = [
        {
            "name": "Muna Brie",
            "ingredients": "confituur van veenbessen, brie, spek, tuinkers",
            "price": "4€"
          },
          {
            "name": "Beemster kaas",
            "extras": "mosterd of boter",
            "price": "3.50€"
          }
    ]

    const visminis = [
        {
            name: "Tonijnsalade",
            ingredients: "huisgemaakte tonijnsalade met appeltjes, tuinkers",
            price: "4.20€"
        },
        {
            name: "Tonijnsalade Niçoise",
            ingredients: "huisgemaakte tonijnsalade met appeltjes, olijven, rode ui, groen boontjes",
            price: "4.60€"
        },
        {
            name: "Surimi krabsalade met krab van Chatka",
            ingredients: "surimi krabsalade met krab van Chatka",
            quantity: "min 12 stuks",
            extra_price: "tomaat en sla: 4.70€",
            price: "7.00€"
        },
        {
            name: "Surimi krabsalade",
            ingredients: "surimi krabsalade",
            quantity: "min 12 stuks",
            price: "4.05€"
        },
        {
            name: "Gerookte zalm",
            ingredients: "huisgemaakte dressing, gerookte zalm in stukjes gesneden, avocado",
            quantity: "min 12 stuks",
            price: "5.60€"
        },
        {
            name: "gerookte zalm met huisgemaakte dressing",
            ingredients: "plakje gerookte zalm zonder avocado en huisgemaakte dressing",
            quantity: "min 12 stuks",
            price: "4.90€"
        }
    ]

    const kipminis = [
        {
            name: "Kip curry",
            ingredients: "huisgemaakte kip curry",
            price: "4€"
          },
          {
            name: "Vietnamese kip",
            ingredients: "gemarineerde kip, opgelegde komkommer & wortel, munt, koriander, Sriracha mayo, huisgemaakte dressing",
            price: "5€",
            quantity: "min 24 stuks"
          },
          {
            name: "Mexicaanse kip",
            ingredients: "gebakken kip met Mexicaanse kruiden, cheesy saus, lente ui, jalepeño, lente dressing",
            price: "4.90€",
            quantity: "min. 24 stuks"
          }
    ]

    const kinderminis = [
        {
            name: "Mini sandwich met kaas en boter",
            price: "3€"
          },
          {
            name: "Mini sandwich met beenham en boter",
            price: "3.20€"
          },
          {
            name: "Mini sandwich met gehaktbrood en ketchup",
            price: "3.50€"
          }
    ]

    const groteBroodjes = [
        {
          "name": "Kaas",
          "price": "5.70€"
        },
        {
          "name": "Beenham",
          "price": "5.60€"
        },
        {
          "name": "Kaas rauwkost",
          "price": "6.70€"
        },
        {
          "name": "Beenham rauwkost",
          "price": "6.60€"
        },
        {
          "name": "Smos ham kaas",
          "price": "7.50€"
        },
        {
          "name": "Eiersalade",
          "price": "6€",
          "extra": "supplement tuinkers 0.30€"
        },
        {
          "name": "Tonijn met appeltjes en groentjes",
          "price": "7.90€"
        },
        {
          "name": "Broodje rauwkost",
          "price": "5.70€"
        },
        {
          "name": "Préparé natuur van het huis",
          "price": "6.90€"
        },
        {
          "name": "Préparé met rauwkost",
          "price": "7.90€"
        },
        {
          "name": "Kip curry",
          "price": "6.10€"
        },
        {
          "name": "Kip curry, rauwkost",
          "price": "7.10€"
        },
        {
          "name": "Vietnamese kip",
          "price": "7.70€"
        },
        {
          "name": "Gehaktbrood klassiek",
          "price": "7.50€"
        },
        {
          "name": "Italiaans gehaktbrood",
          "price": "7.70€"
        },
        {
          "name": "Vegan feta",
          "price": "8.90€"
        },
        {
          "name": "Muna Brie",
          "price": "8€"
        },
        {
          "name": "Italiaanse martino",
          "price": "7.90€"
        },
        {
          "name": "Aziatische martino",
          "price": "7.90€"
        },
        {
          "name": "Gerookte zalm",
          "price": "10€"
        },
        {
          "name": "Zalm avocado",
          "price": "13€"
        },
        {
          "name": "Zalm rauwkost",
          "price": "13€"
        }
      ]
      
    return(
        <>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                <div>
                    <div className="bg-minibroodjes w-full py-20 rounded-xl shadow-lg shadow-slate-500">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">Mini Broodjes</h2>
                    </div>
                    
                    <h4 className="text-4xl mt-4 p-2 font-semibold"><GiMeat className="m-auto"/></h4>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {vleesminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name}</h5>
                                <p className="text-sm italic mb-1">{mini.ingredients}</p>
                                {mini.description && <p className="text-sm italic mb-1">{mini.description}</p>}
                                <p className="font-semibold text-sm">{mini.price}</p>
                            </div>
                        ))}
                    </div>
                    
                    <h4 className="text-4xl my-4 p-2 font-semibold"><ImLeaf className="m-auto"/></h4>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {vegiminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name} {mini.quantity && `(${mini.quantity})`}</h5>
                                <p className="text-sm italic mb-1">{mini.ingredients}</p>
                                <p className="font-semibold text-sm">{mini.price}</p>
                                {mini.extras && <p className="text-sm">extras: {mini.extras} <b>{mini.extra_price}</b></p>}
                            </div>
                        ))}
                    </div>

                    <h4 className="text-4xl my-4 p-2 font-semibold"><BiCheese className="m-auto"/></h4>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {kaasminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name}</h5>
                                <p className="text-sm italic mb-1">{mini.ingredients}</p>
                                <p className="font-semibold text-sm">{mini.price}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-4xl my-4 p-2 font-semibold"><IoFish className="m-auto"/></h4>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {visminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name} {mini.quantity && `(${mini.quantity})`}</h5>
                                <p className="text-sm italic mb-1">{mini.ingredients}</p>
                                <p className="font-semibold text-sm">{mini.price}</p>
                            </div>
                        ))}
                    </div>
                    
                    <h4 className="text-4xl my-4 p-2 font-semibold"><GiChickenLeg className="m-auto"/></h4>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {kipminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name} {mini.quantity && `(${mini.quantity})`}</h5>
                                <p className="text-sm italic mb-1">{mini.ingredients}</p>
                                <p className="font-semibold text-sm">{mini.price}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-xl my-4 p-2 font-semibold flex justify-center"><MdChildCare className="text-4xl"/> Voor de kinderen:</h4>
                    <div className="m-auto grid grid-cols-1 md:grid-cols-2">
                        {kinderminis.map((mini, index) =>(
                            <div className="my-2 p-4" key={index}>
                                <h5 className="font-semibold italic">{mini.name}</h5>
                                <p className="font-semibold text-sm">{mini.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="bg-grotebroodjes w-full py-20 rounded-xl shadow-lg shadow-slate-500 mb-8">
                      <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white text-center bg-black bg-opacity-40 w-2/3 md:w-72 rounded py-4 m-auto">Grote broodjes</h2>
                    </div>
                    <p className="text-center font-semibold italic">Minimum 5/soort {"(uitgezonderd de kaas, ham en tonijn broodjes die kunnen per stuk)"}</p>
                    <p className="text-center text-sm mb-4 italic">Voor de halve broodjes netjes verpakt in papier en naamkaartjes, gepresenteerd op een schotel of cateringdoos komt er een presentatie toeslag bij van 1€/groot broodje</p>
                    <div className="m-auto border-b-2 grid grid-cols-1 md:grid-cols-2">
                        {groteBroodjes.map((broodje, index) =>(
                            <div className="p-2" key={index}>
                                <h5 className="font-semibold italic">{broodje.name} {broodje.price}</h5>
                                <p className="font-semibold text-sm">{broodje.extra}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </>
    )
}