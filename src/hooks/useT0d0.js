import { useState, useEffect }  from 'react'
import useInput                 from './useInput'
import useFilter                from './useFilter'

let id = 0

export default function useT0d0() {
  const { value, setValue, handleInput } = useInput()
  const { filter, handleFilter } = useFilter()

  useEffect( () => {
    window.localStorage.setItem("t0d0s", JSON.stringify(t0d0s))
  }, [t0d0s])


  const [t0d0s, setT0d0s] = useState( () => {
    let t0d0Data = window.localStorage.getItem("t0d0s") || ""
    if (t0d0Data && t0d0Data !== "[]") {
      t0d0Data = JSON.parse(t0d0Data)
      id = t0d0Data[0].t0d0Id + 1
    } else {
      t0d0Data = []
    }
    return t0d0Data
  })

  function handleSubmit(event) {
    event.preventDefault()
    setT0d0s([{
      isDone: false, 
      t0d0Id: id, 
      t0d0Content: event.target[0].value
    }, ...t0d0s])
    id++
    setValue('')
  }

  function handleDelete(t0d0Id) {
    setT0d0s(t0d0s.filter( t0d0 => t0d0.t0d0Id !== t0d0Id))
  }

  function handleClearDone(){
    setT0d0s(t0d0s.filter( t0d0 => t0d0.isDone !== true))
  }
  
  function handleToggleIsDone(t0d0Id) {
    setT0d0s(t0d0s.map( t0d0 => {
      if (t0d0.t0d0Id !== t0d0Id) return t0d0
      return {
        ...t0d0,
        isDone: !t0d0.isDone
      }
    }))
  }

  return {
    t0d0s,
    handleDelete,
    handleClearDone,
    handleToggleIsDone,
    handleSubmit,
    value,
    setValue,
    handleInput,
    filter,
    handleFilter,
  }
}
