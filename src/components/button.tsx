import { HTMLProps } from 'react'
import { layout, color, LayoutProps, ColorProps } from 'styled-system'
import styled from 'styled-components'

interface Props {
  type?: 'submit' | 'button' | 'reset' | undefined
}

export type ButtonProps = Props &
  LayoutProps &
  ColorProps &
  HTMLProps<HTMLButtonElement>

export const Button = styled.button<ButtonProps>`
  ${layout}
  ${color}
`
