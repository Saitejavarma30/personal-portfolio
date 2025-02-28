import {ContactTextContainer} from "./styles.ts";
import {motion} from "framer-motion";


const ContactHeader = () => {

    return <ContactTextContainer>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5}}
            style={{textAlign: "center"}}
        >
            Hey There!!
        </motion.div>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5}}
            style={{textAlign: "center"}}
        >
            No need to be Shy
        </motion.div>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5}}
            style={{textAlign: "center", fontSize: "1.5rem"}}
        >
            Got a project in mind? Let's talk
        </motion.div>
    </ContactTextContainer>

}

export default ContactHeader;