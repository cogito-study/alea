import React, { HTMLProps } from 'react'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  backgroundColor?: string
  type?: 'submit' | 'button' | 'reset' | undefined
}

export function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>
}
