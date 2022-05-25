import { Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles';

 
import React, { useEffect, useState } from 'react'
const useStyles = makeStyles((theme) =>({
  root: {
      '& ul > li> button:not(.Mui-selected)': {
        backgroundColor: '#8f8f36',
        color:'white',
      
       },
  }}),
);


const CustomPagination = ({setPage,numOfPages=10}) => {
  const [newPage, setNewPage] = useState(numOfPages)
  
  const classes = useStyles();
    const handlePageChange= (page)=>{
        setPage(page)
        window.scroll(0,0);
    }
    useEffect(()=>{
      if (numOfPages>=500) {
        setNewPage(500)
      } else{
        setNewPage(numOfPages)
      }
    },[numOfPages])
  return (
    
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#db3030"
    }}>
            

        <Pagination 
        className={classes.root} 
          count={newPage}
          onChange={(e)=>handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color='primary'
          />
           
    </div>
  )
}

export default CustomPagination