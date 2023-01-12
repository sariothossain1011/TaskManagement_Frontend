import React from 'react'
import Loder from '../../Assets/Images/FullSecrenLoder3.gif'
import Styled from 'styled-components'
const FullScrenLoder = () => {
  return (
    <Wrapper>
        <div className='section'>
        <div className='ImgDiv '>
        <figure>
        <img src={Loder} alt="Loding..." />
        </figure>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = Styled.section`
.ImgDiv{
    margin:auto
    margin-top:-50px
}
`

export default FullScrenLoder