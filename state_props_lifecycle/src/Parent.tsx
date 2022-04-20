import { useState, useEffect } from 'react';
import { css } from '@emotion/css'
import Children from './Children'

const ParentCss = css`
  border: solid 1px gray;
  background-color: #5f85e6;
  padding: 5rem;
`

function Parent() {
  const [value, setValue] = useState(1)

  useEffect(() => {
    console.log('parent mounted')
    return () => {
      console.log('parent will unmount')
    }
  }, [])

  useEffect(() => {
    console.log('parent updated')
    return () => {
      console.log('parent will update')
    }
  })

  useEffect(() => {
    console.log('parent state updated', value)
    return () => {
      console.log('parent state will update', value)
    }
  }, [value])

  const plusOne = () => {
    setValue(prev => prev + 1)
  }

  return (
    <div className={ParentCss}>
      <p>parnet의 state {value}</p>
      <button onClick={plusOne}>value에 1 더하기</button>
      <Children value={value} plusOne={plusOne}/>
    </div>
  );
}

export default Parent;
