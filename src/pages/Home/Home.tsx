import { getLists } from "@/apiCalls/list"
import React, { useEffect, useState } from 'react'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import "./home.css"

interface HomeProps {
  type?: "movie" | "series";
}

const Home: React.FC<HomeProps> = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState("")

  const [isListsLoading, setIsListsLoading] = useState(false);

  useEffect(() => {
    const fetch_list = async () => {
      const data = await getLists({ type: type, genre: genre, setIsLoading: setIsListsLoading })
      setLists(data)
    }
    fetch_list()
  }, [type, genre])

  console.log("LISTT", lists)

  return (
    <div className='home'>
      <Navbar />

      <Featured type={type!} setGenre={setGenre} />

      {!isListsLoading && (lists.length > 0) ?
        <div className='px-14 py-0 flex flex-col gap-10'>
          {lists?.map((list, index) => (
            <List list={list} key={index} />
          ))}
        </div>

        :

        <div className=' flex items-center gap-4 w-full'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-[280px] h-[120px] bg-gray-600 animate-pulse"></div>
          ))}
        </div>
      }

      <div className="h-32"></div>
    </div>
  )
}

export default Home 