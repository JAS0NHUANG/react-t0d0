import React, { useState, useEffect }   from 'react'
import GlobalStyle                      from './constants/GlobalStyle'
import T0d0                             from './components/T0d0'
import T0d0Item                         from './components/T0d0Item'
import T0d0Form                         from './components/T0d0Form'
import useT0d0                          from './hooks/useT0d0'

function App() {
  const {
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
  } = useT0d0()

  return(
    <div>
      <GlobalStyle />
      <T0d0 handleFilter={handleFilter} handleClearDone={handleClearDone} >
        {
          t0d0s
            .filter( t0d0 => {
              if (filter === "ALL") return t0d0
              if (filter === "DONE") return t0d0.isDone === true
              if (filter === "ACTIVE") return t0d0.isDone === false
            })
            .map( t0d0  => {
              return (
                <T0d0Item
                  key={t0d0.t0d0Id}
                  t0d0={t0d0}
                  handleDelete={handleDelete}
                  handleToggleIsDone={handleToggleIsDone}
                />
              )
            })
        }
        <T0d0Form value={value} handleSubmit={handleSubmit} handleInput={handleInput} />
      </T0d0>
    </div>
  )
}

export default App
