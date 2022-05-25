import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { img_300, unavailable } from '../../config/config';
import "./details.css"

const Details = () => {
    const [content, setContent] = useState([]);
    const [credit, setCredit] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [key, setKey] = useState();
    const { search } = useLocation()
    // console.log(search)
    let queryInObject = queryString.parse(search);
    // console.log(queryInObject)

    const fetchDetails = () => {
        fetch(`https://api.themoviedb.org/3/${queryInObject.media}/${queryInObject.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((result) => {
            // console.log(result)
            result.json().then((responce) => {
                // console.log(responce)
                setContent(responce)
            })
        })
    }
    const fetchCredits = () => {
        fetch(`https://api.themoviedb.org/3/${queryInObject.media}/${queryInObject.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((result) => {
            // console.log(result)
            result.json().then((responce) => {
                // console.log(responce)
                setCredit(responce)
            })
        })
    }
    const fetchTrailer = () => {
        fetch(`https://api.themoviedb.org/3/${queryInObject.media}/${queryInObject.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((result) => {
            // console.log(result)
            result.json().then((responce) => {
                // console.log(responce.results)
                setTrailer(responce.results)
                setKey(responce.results[0].key)

            })
        })
    }
    const videoPlay = (i) => {
        // console.log(i)
        setKey(i.key)
        // console.log(key)
    }
    useEffect(() => {
        fetchDetails();
        fetchCredits();
        fetchTrailer();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {content.id &&
                <>
                    <h1> Name : {content.name || content.title}</h1>
                    {queryInObject.media === "tv" ?
                        <h4> Total Seasons:  {content.number_of_seasons}</h4> : null}
                    {queryInObject.media === "tv" ?
                        <h4> Total Episode:  {content.number_of_episodes}</h4> : null}

                    <img src={content.poster_path ? `${img_300}/${content.poster_path}` : unavailable} alt="" />
                    <h4> Release Date:  {content.first_air_date || content.release_date}</h4>
                    <h4>Country of Origan : {content.production_countries.map((i, k) => (<><span key={k}>{i.name}<br /> </span></>))}</h4>

                    <div className='overview'> <h4>{content.overview}</h4></div>
                    <h4>{content.tagline}</h4>
                    <h4>Genres: {content.genres.map((i, k) => (<><span key={k}>{i.name}  </span></>))}</h4>
                </>

            }
            {
                credit.id &&
                <>
                    <h1>Cast:</h1> {credit.cast.map((i,k) => <button key={k} className='cast'>{i.name}</button>)}
                </>
            }
            <div>

                {
                    trailer.length >=1 &&
                    <>
                    <div>

                        <h1>Watch Trailer or related Videos</h1>{trailer.map((i,k) => <button key={k} className='span' onClick={() => { videoPlay(i) }}>{i.type}</button>)
                        }
                        </div>
                        <div>                    
                        {((trailer.length) >= 1) &&
                            <iframe width="700" height="506" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            </div>
                    </>
                }
            </div>

        </div>
    )
}

export default Details