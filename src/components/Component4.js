import { useState } from "react"

function Component4(){
  const [ value, setValue ] = useState("Wall-E")
  return(
    <div className="Component4">
      <h3>Component 4</h3>
      <label htmlFor="movie">Favorite Movie</label>
      <input 
        id="movie"
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="Component4__movie"
        style={{ border: '1px solid blue', borderRadius: '3px' }} 
        data-value="abc" />
    </div>
  )
}
export default Component4