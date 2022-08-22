import { useState } from "react"

function Component5({ increment }){
  const [ value, setValue ] = useState(0)
  return(
    <div className="Component5">
      <h4>Component 5</h4>
      <div className="Component5__value">{value}</div>
      <div className="Component5__controles">
        <button onClick={e => setValue(prevValue => prevValue - increment)}>subtract</button>
        <button onClick={e => setValue(prevValue => prevValue + increment)}>add</button>
      </div>
    </div>
  )
}
export default Component5