import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import './Search.css'
import { useState } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

export default function BasicTextFields() {
  const [value, setValue] = React.useState('movie');
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPage, setNumOfPage] = useState()
  const [total, setTotal] = useState(null)
  const handleChange = (event, newValue) => {
    // console.log(newValue)
    setValue(newValue)
  };
  const searchQuery = (e) => {
    // console.log(e)
    setQuery(e.target.value)
    // console.log(query)
  };


  const control=(e)=>{
  e.preventDefault()
  }
  const enterClick=(evant)=>{
    if (evant.key === 'Enter') {
        searchResult()      
    }
  }

  const searchResult = () => {
    // console.log(page)
    fetch(`https://api.themoviedb.org/3/search/${value}?api_key=0c3074db626975ac61aaf12acaaaf400&language=en-US&page=${page}&include_adult=false&query=${query}`).then((responce) => {
      // console.log(responce)
      return responce.json()
    }).then((result) => {
      // console.log(result);
      setContent(result.results)
      setNumOfPage(result.total_pages)
      setTotal(result.total_results)
    })
  }
  React.useEffect(() => {
    if (query !== "") {
      searchResult();
    }
    //eslint-disable-next-line
  }, [page, value])
  return (
    <>
      <div className='search'>

        <Box
          component="form"
          onSubmit={(e)=>control(e)}
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
          onChange={(e) => searchQuery(e)}
          onKeyPress={(evant)=>{enterClick(evant)}}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label={<SearchIcon />} variant="filled" />
          <Button onClick={searchResult}>Search</Button>
        </Box>
      </div>
      <div className="tabs">

        <Box sx={{
          width: '50ch',
          backgroundColor: 'white',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="movie" label="Movies" />
            <Tab value="tv" label="Tv Shows" />
          </Tabs>
        </Box>
      </div>
      <div>
        <div className="trending" >
          {            
            content && content.map((c) => (
              <SingleContent key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={value}
                vote_average={c.vote_average} />
             ) )
          }
          {
            (total===0)?<h1>No Data Found</h1>:null
          }
        </div>
        {
          numOfPage > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPage} />
          )
        }
      </div>

    </>
  );


}
