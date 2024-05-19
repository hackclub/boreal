import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

const Credits: React.FC<Props> = (props) => {
  return (
    <div key="page-0" className="bg-[#76728B] min-h-screen px-20 pt-20">
      <div className="flex justify-center items-center h-[80vh]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-center font-extrabold text-[40px] bg-[#f1eddd] rounded-full w-[500px] h-[500px] flex justify-center items-center cursor-pointer"
          onClick={props.onClick}
        >
          ENTER HERE
        </motion.div>
      </div>
      <div className="flex items-center justify-between w-full text-[#f1eddd] gap-5 text-xl">
        <div className="w-[70%]">
          <p>
            Artwork by Zoya (17, Texas), and website by Faisal (18, Vermont) and Ivoine (19,
            Bahamas)
          </p>
          <p>Voice by Deryn Oliver (As seen in Harry Potter and the Chamber of Secrets)</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/audio.svg" width={72} height={72} alt="audio" />
          <p className="block">Best Experienced with Audio</p>
        </div>
      </div>
    </div>
  );
}

export default Credits