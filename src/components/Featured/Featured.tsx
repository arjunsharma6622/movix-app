import axiosInstance from "@/axiosInstance";
import { GenreType } from "@/types/genre";
import { Info, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectBox } from "../SelectBox";
import "./featured.css"
import { MovieType } from "@/types/movie";

const Featured = ({ type, setGenre }: { type: string, setGenre: (genre: string) => void }) => {
    const [featuredMovie, setFeaturedMovie] = useState<MovieType | null>(null)


    useEffect(() => {
        const getRandom = async () => {
            try {
                const res = await axiosInstance.get(`/movie/random?type=${type}`)
                setFeaturedMovie(res.data[0])
            }
            catch (err) {
                console.log(err)
            }
        }
        getRandom();
    }, [type])

    const localGenres = localStorage.getItem("genres");
    const genresData: GenreType[] = localGenres ? JSON.parse(localGenres) : {}

    return (
        <div className='featured relative h-[70vh] '>

            {type && genresData && (
                <div className="absolute z-[40] top-16 left-12 flex flex-col items-start gap-1 w-72 text-white">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <SelectBox
                        placeholder="Genre"
                        optionsData={
                            genresData.map((genre) => {
                                return {
                                    value: genre._id as string,
                                    name: genre.name as string
                                }
                            })
                        }
                        onChange={(value) => setGenre(value as string)}
                    />
                </div>
            )}

            <div className="h-full">
                <video autoPlay src={featuredMovie?.trailer || "https://res.cloudinary.com/dexnb3wk2/video/upload/v1733649395/netflix/woqkbepb8pkie2cq6pzb.mp4"} className="w-full h-full object-cover aspect-auto" />
            </div>

            <div className="info z-[40]">
                <img src={featuredMovie?.imgTitle} alt="" className='trailer_img' />
                <div className="flex items-center gap-4">
                    <Link to={`/watch/${featuredMovie?._id}`} >
                        <button className="play">
                            <Play />
                            <span>Play</span>
                        </button>
                    </Link>
                    <button className="more">
                        <Info />
                        <span>Info</span>
                    </button>
                </div>
            </div>

            <div className="absolute z-[30] bottom-0 bg-gradient-to-t from-neutral-950 to-transparent h-[200px] w-full">
            </div>
        </div>
    )
}

export default Featured