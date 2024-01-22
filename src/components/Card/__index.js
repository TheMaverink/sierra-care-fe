import React from 'react'
import styled from 'styled-components'
import Color from 'color'

const CardWrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};

  background: linear-gradient(
    -30deg,
    ${(props) => props.darkenBckgdColor} 0%,
    ${(props) => props.brightBckgdColor} 100%
  );

  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 3)}px;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  text-align: left;
`

const CardTitle = styled.h3`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 25px;
  margin-left: 30px;
`

const CardDataDisplay = styled.h2`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 50px;
  margin-left: 30px;
  letter-spacing: 4px;
`

const Card = (props) => {
  const {
    backgroundColor,
    gradient,
    title,
    dataDisplay,
    titleColor,
    dataDisplayColor,
    className,
  } = props
  //TODO:What does.lighter do and also .darken?
  const brightBckgdColor = Color("#fff").lighten(0.15)
  const darkenBckgdColor = Color("#fff").darken(0.3)



   return  <CardWrapper
      backgroundColor={backgroundColor}
      brightBckgdColor={brightBckgdColor}
      darkenBckgdColor={darkenBckgdColor}
      className={className}
      gradient={gradient}
    >
      {title && <CardTitle color={titleColor}>{title}</CardTitle>}
      {dataDisplay && (
        <CardDataDisplay color={dataDisplayColor}>
          {dataDisplay}
        </CardDataDisplay>
      )}
    </CardWrapper>
  
}

export default Card
