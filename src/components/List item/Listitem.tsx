import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { MovieType } from "@/types/movie";
import { ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Listitem = ({ movie }: { movie: MovieType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-280 shadow-sm relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-md`}>
        <img loading="lazy" src={movie?.img} className="rounded-md w-[280px]" />
      </div>

      <div className={`bg-black/80 w-full h-full absolute top-0 rounded-md ${isHovered ? "block" : "hidden"} flex items-center justify-center gap-6`}>
        <Link to={`/watch/${movie?._id}`} className="flex flex-center gap-1 cursor-pointer">
          <Play className="" />
          Play
        </Link>


        <Dialog>
          <DialogTrigger>
            <div className="flex items-center gap-1 cursor-pointer">
              <ChevronDown className="" />
              More
            </div>
          </DialogTrigger>
          <DialogContent className="bg-black border-none p-0 rounded-xl max-w-[50%]">
            <div >
              <div className="relative">
                <video autoPlay src={movie?.trailer || "https://res.cloudinary.com/dexnb3wk2/video/upload/v1733649395/netflix/woqkbepb8pkie2cq6pzb.mp4"} className="w-full object-contain aspect-[16/9] rounded-t-xl" />
                <div className="text-white absolute bottom-20 left-10 flex flex-col gap-2">
                  <img src={movie?.imgTitle} alt="" className=" w-48" />
                  <Link to={`/watch/${movie?._id}`} className="text-sm p-2 flex items-center gap-2 border bg-black/50">
                    <Play className="w-5 h-5" /> Play
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-white p-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span>{movie?.year}</span>
                    <span>{movie?.duration}</span>
                  </div>
                  <span className="bg-neutral-800 p-2 w-fit text-sm">U/A {movie?.limit}+</span>
                </div>
                <p>{movie?.desc}</p>
              </div>

            </div>
          </DialogContent>
        </Dialog>
      </div>

    </div>
  );
};

export default Listitem;
