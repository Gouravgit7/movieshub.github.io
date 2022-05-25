import { Chip } from '@mui/material'
import React, { useEffect } from 'react'

const Genres = ({
  selectedGeners,
  setSelectedGeners,
  geners,
  setGeners,
  setPage,
  type,
}) => {

  const handleAdd = (item)=>{
    setSelectedGeners([...selectedGeners,item])
    setGeners(geners.filter((i)=>i.id !== item.id))
    setPage(1);
  }
  const handleRemove = (gen)=>{
      // console.log("hello");
      setSelectedGeners(
        selectedGeners.filter((selected)=>selected.id !== gen.id)
      )
      setGeners([...geners,gen])
      setPage(1)

  }

  const fetchGeners = () => {
    fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((responce)=>{
      responce.json().then((result)=>{
        // console.log(result);
        setGeners(result.genres)

      })
    })
  }
  useEffect(() => {
    fetchGeners();
    // eslint-disable-next-line
  }, [])


  return (
    <div style={{padding: "10px 0px"}}>
      {
        selectedGeners&&
        selectedGeners.map((gen)=>(
          
          <Chip style={{margin:"2px"}}
          label={gen.name}
          clickable
          key={gen.id}
          color ='primary'
          onDelete={()=>handleRemove(gen)}
          />
        ))
      }
      {
        geners&&
        geners.map((item)=>(
          
          <Chip style={{backgroundColor:"white", margin:"2px"}}
          label={item.name}
          clickable
          key={item.id}
          onClick={()=>handleAdd(item)}

          />
        ))
      }
    </div>
  )
}

export default Genres