import React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_S, MEDIA_QUERY_M, MEDIA_QUERY_L } from '../constants/Breakpoint'

const Main = styled.main`
  margin: 0;
  background: #eee;
  min-height: 450px;
  width: 100%;
  ${MEDIA_QUERY_S} {
    margin: 30px auto 0;
    max-width: 90%;
  }
  ${MEDIA_QUERY_M} {
    margin: 40px auto 0;
    max-width: 80%;
  }
  ${MEDIA_QUERY_L} {
    margin: 60px auto 0;
    max-width: 1080px;
  }
`
const T0d0Header = styled.div`
  border-bottom: solid 2px #121212;
  ${MEDIA_QUERY_S} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
`

const T0d0Title = styled.div`
  height: 100%;
  min-width: 78px;
  ${MEDIA_QUERY_S} {
    margin-left: 20px;
  }
`

const T0d0NavUl = styled.ul`
  align-items: center;
  padding: 0;  
  ${MEDIA_QUERY_S} {
    display: flex;
  }
`

const T0d0NavLi = styled.li`
  margin: 3px;
  display: inline-block;
  div {
    display: inline-block;
    cursor: pointer;
    border: 2px solid #222;
    ${MEDIA_QUERY_M} {
      border: none;
    }
  }
  span {
    display: none;
    ${MEDIA_QUERY_M} {
      display: inline-block;
    }
  }
`

function T0d0NavItem ({ content, isLast, handleFilter, handleClearDone }) {
  function handler (event) {
    if (content === "CLEAR DONE") {
      handleClearDone()
    } else {
      handleFilter(event.target.innerText)
    }
  }

  return (
    <T0d0NavLi>
      <div onClick={handler}>{content}</div>
      {isLast ? "" : (<span> | </span>)}
    </T0d0NavLi>
  )
}

export default function T0d0 ({ children, handleFilter, handleClearDone }) {
  return (
    <Main>
      <T0d0Header>
        <T0d0Title># T0D0</T0d0Title>
        <nav>
          <T0d0NavUl>
            <T0d0NavItem isLast={false} content="ALL" handleFilter={handleFilter} />
            <T0d0NavItem isLast={false} content="ACTIVE" handleFilter={handleFilter} />
            <T0d0NavItem isLast={false} content="DONE" handleFilter={handleFilter} />
            <T0d0NavItem isLast={false} content="CLEAR DONE" handleClearDone={handleClearDone} />
            <T0d0NavItem isLast={true} content="SAVE" />
          </T0d0NavUl>
        </nav>
      </T0d0Header>
      {children}
    </Main>
  )
}
