import { motion } from "framer-motion";

const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={StairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="w-full h-full bg-white relative"
                    style={{ minHeight: '10vh' }}  // Add minHeight to ensure responsiveness
                />
            ))}
        </>
    );
};

export default Stairs;
