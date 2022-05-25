import React, { useEffect ,useState} from 'react'
import CustomPagination from "../../components/Pagination/CustomPagination"
import SingleContent from "../../components/SingleContent/SingleContent"
import Genres from '../../components/Genres'
import useGenres from '../../hooks/useGenre'

const Movies = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPage, setNumOfPage] = useState()
  const [geners, setGeners] = useState([])
  const [selectedGeners, setSelectedGeners] = useState([])
  const genreforURL = useGenres(selectedGeners  )

  const fetchMovies = () => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreforURL}`).then((result) => {
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
      <Genres 
      type ="movie"
      selectedGeners={selectedGeners}
      setSelectedGeners={setSelectedGeners} 
      geners={geners} setGeners={setGeners}
      setPage={setPage}
       />
      <span className="pageTitle">Movies</span>
    
            <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent 
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}                           
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

export default Movies