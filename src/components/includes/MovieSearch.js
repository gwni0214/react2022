import React, {useRef} from 'react'

function MovieSearch({onSearch}) {
    console.log(onSearch);
    
    const inputRef = useRef();
  
  const handleSearch = ()=>{
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onKeyPress = (event) => {

    if(event.key === "Enter"){
      
      handleSearch();
    }
  }

  const onClick = () => {
   
    handleSearch();
  }
  return (
    <div className='movie__search container'>
      <h2>검색하기</h2>
      <input 
      ref={inputRef}
      type="search"
       placeholder='검색하세요!'
       onKeyPress={onKeyPress} 
      />
      <button type='submit' onClick={onClick}>검색</button>
    </div>
  )
}

export default MovieSearch