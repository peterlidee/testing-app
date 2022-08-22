import { useState } from "react"

function Component3(){
  const [ count, setCount ] = useState(0)
  return(
    <div className="Component3">
      <h4>Component 3</h4>
      <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
    </div>
  )
}
export default Component3