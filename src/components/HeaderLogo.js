import React from "react"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: "IBMPlexMono";

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <Logo>Coder Files</Logo>
    </HeaderWrapper>
  )
}
