const useGenres=(selectedGeners)=>{
    if(selectedGeners.length<1) return "";

    const GenreIds = selectedGeners.map((g)=>g.id)
    return GenreIds.reduce((acc,curr)=>acc+","+curr)
}
export default useGenres; 
