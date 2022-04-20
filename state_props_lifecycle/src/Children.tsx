import { useState, useEffect } from 'react';
import { css } from '@emotion/css'

const ChildrenCss = css`
  border: solid 1px gray;
  background-color: #395ebd;
  padding: 2rem;
  margin-top: 2rem;
`
interface Props {
    value: number,
    plusOne: () => void,
}

function Children({value, plusOne}: Props) {
    const [childValue, setChildValue] = useState(value)

    useEffect(() => {
      console.log('children mounted')
      return () => {
        console.log('children will unmount')
      }
    }, [])

    useEffect(() => {
      console.log('children updated')
      return () => {
        console.log('children will update')
      }
    })

    useEffect(() => {
      console.log('children props value updated', value)
      return () => {
        console.log('children props will update', value)
      }
    }, [value])

    useEffect(() => {
      console.log('children state updated', childValue)
      return () => {
        console.log('children state will update', childValue)
      }
    }, [childValue])

    return (
      <div className={ChildrenCss}>
        <p>parent의 props를 그대로 {value}</p>
        <p>parent의 props를 state로 {childValue}</p>
        <div>
            <button onClick={plusOne}>props의 plusOne 실행</button>
            <button onClick={() => setChildValue(prev => prev + 1)}>setState 실행</button>
        </div>
      </div>
    );
  }
  
  export default Children;
  