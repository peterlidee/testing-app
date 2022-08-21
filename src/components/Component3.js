import { useState } from "react"

function Component3(){
  const [ count, setCount ] = useState(0)
  return(
    <div className="Component3">
      <h3>Counter</h3>
      <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
    </div>
  )
}
export default Component3