import React from "react"
import styled from 'styled-components';
import { useThemeUI, Button, Flex, Box, Checkbox, Styled } from 'theme-ui'



const Wrapper = styled.div``
const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #242424;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #ffffff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const ColorPicker = ({ style }) => {
    const { colorMode, setColorMode } = useThemeUI()
    return <Wrapper style={style}>
        <CheckBoxWrapper>
            <CheckBox  id="checkbox" type="checkbox" onChange={() => setColorMode(colorMode === 'dark' ? 'light':'dark')} />
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    </Wrapper>
}
export default ColorPicker