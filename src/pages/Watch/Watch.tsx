import axiosInstance from '@/axiosInstance'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import './watch.css'
import { MovieType } from '@/types/movie'

const Watch = () => {

  const { id: movieId } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get(`/movie/find/${movieId}`)
        setMovie(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getMovie()
  }, [])

  return (
    <div className='watch'>
      <Link to={"/"}>
        <div className="back">
          <ArrowLeft />
          Home
        </div>
      </Link>
      <video
        src={movie?.trailer}
        className='video'
        autoPlay
        controls
        autoFocus
      >
      </video>
    </div>
  )
}

export default Watch