import { motion } from "framer-motion";

interface ReviewCardProps{
    review: string
}

const ReviewCard : React.FC<ReviewCardProps> = ({ review}) =>{
    const cardvariants = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: { delay: 0.2}},
        exit: { opacity: 0, transition: { duration: 0 } }
    }
    return(
            <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardvariants}
                className="flex m-auto h-20 w-4/5 md:w-2/3 p-4 rounded shadow-lg shadow-slate-600 my-4"
            >
                <div className="m-auto">
                    <p className="text-sm italic p-2 text-center lg:text-left">"{review}"</p>
                </div>
            </motion.div>             
  
    )
}

export default ReviewCard