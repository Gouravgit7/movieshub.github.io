import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import useGenres from '../../hooks/useGenre'


const Series = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPage, setNumOfPage] = useState()
  const [geners, setGeners] = useState([])
  const [selectedGeners, setSelectedGeners] = useState([])
  const genreforURL = useGenres(selectedGeners  )

  const fetchMovies = () => {
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`).then((result) => {
        result.json().then((response) => {
          // console.log(response)
          setContent(response.results)
          setNumOfPage(response.total_pages)

        }) 
      })
    }
  useEffect(() => {
    fetchMovies()
    //eslint-disable-next-line
  }, [page,genreforURL])
  return (
    <div>
       <span className="pageTitle">Series</span>
       <Genres 
      type ="tv"
      selectedGeners={selectedGeners}
      setSelectedGeners={setSelectedGeners} 
      geners={geners} setGeners={setGeners}
      setPage={setPage}
       />
       <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="tv"                           
                            vote_average={c.vote_average}
                             />
                    ))

                }

            </div>
            <div>
            {
              numOfPage >1 && (

                <CustomPagination setPage={setPage} numOfPages={numOfPage} />
              )
            }
        </div>

    </div>
  )
}

export default Series