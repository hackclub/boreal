import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

const Credits: React.FC<Props> = (props) => {
  return (
    <div key="page-0" className="bg-[#76728B] min-h-screen px-20 pt-5">
      <div className="flex items-center justify-end gap-4 text-white">
        <Image src="/audio.svg" width={62} height={48} alt="audio" />
        <p className="block font-medium">Best Experienced with Audio</p>
      </div>
      <div className="flex justify-center items-center h-[75vh]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-center font-extrabold text-5xl bg-[#D9D9D9] text-[#76728B] rounded-full w-48 h-48 lg:w-[500px] lg:h-[500px] flex justify-center items-center cursor-pointer"
          onClick={props.onClick}
        >
          ENTER HERE
        </motion.div>
      </div>
      <div className="text-center text-white text-lg font-medium hidden sm:block">
        <p>
          Artwork by Zoya (17, Texas), and website by Faisal (18, Vermont) and Ivoine (19, Bahamas)
        </p>
        <p>Voice by Deryn Oliver (As seen in Harry Potter and the Chamber of Secrets)</p>
      </div>
      {/* </div>
      </div> */}
    </div>
  );
}

export default Credits