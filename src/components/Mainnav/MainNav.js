import * as React from 'react';
// import Box from '@mui/material/Box';
// import { makeStyles } from '@mui/styles';
// // import BottomNavigation from '@mui/material/BottomNavigation';
// // import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {  Link } from 'react-router-dom';
import "./main_nav.css"
// // import SingleContent from './SingleContent/SingleContent';

// const useStyle = makeStyles({
//   root: {
//     position: "fixed",
//     width :"100%",
//     bottom : 0,
//     backgroundColor: "#2d313a",
//     zIndex :100,


//   }
// })

export default function SimpleBottomNavigation() {
  //   const {pathname} = useLocation()
  //   // let val;
  //   // switch(pathname){
  //   //   case '/movies' : {val=1;break;}
  //   //   case '/series' : {val=2;break;}
  //   //   case '/search' : {val=3;break;}
  //   //   case '/details' : {val=4;break;}
  //   //   default : {val=0;break;}
  //   // }
  //   // const [value, setValue] = React.useState(val);
  //   // // console.log(pathname)

  //   // const classes = useStyle()  
  //   // const navigate = useNavigate()
  //   // React.useEffect(()=>{

  //   //   if(value===0)navigate("/")
  //   //   else if(value===1) navigate('/movies')
  //   //   else if(value===2) navigate('/series')
  //   //   else if(value===3) navigate('/search')
  //   //   else if(value===4) navigate('/details')

  //   // },[value,pathname,navigate])

  return (
    //     <Box >
    //       {/* <BottomNavigation
    //         showLabels
    //         className={classes.root}
    //         value={value}
    //         onChange={(event, newValue) => {
    //           console.log('newvalue' + newValue)
    //           setValue(newValue);
    //         }}
    //       >

    //         <BottomNavigationAction style={{color:"black"}} label="Trending" icon={<WhatshotIcon />} />
    //         <BottomNavigationAction style={{color:"black"}} label="Movies" icon={<MovieCreationIcon />} />
    //         <BottomNavigationAction style={{color:"black"}} label="TV- Series" icon={<TvIcon />} />
    //         <BottomNavigationAction style={{color:"black"}} label="Search" icon={<SearchIcon />} />

    //       </BottomNavigation> */}

    //     </Box>
    <div className='linkCon'>
      <div className='link'>
        <Link className='linkSender' to="/" > <WhatshotIcon/><br/>Trending</Link>
        <Link className='linkSender' to="/movies" > <MovieCreationIcon/><br/>Movies</Link>
        <Link className='linkSender' to="/series"><TvIcon/><br/>Series</Link>
        <Link className='linkSender' to="/search"><SearchIcon/><br/>Search</Link>
      </div>
    </div>

  )
}
