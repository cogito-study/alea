import React, { FormEvent } from 'react';
import { Box, Paragraph, BoxProps } from '../../atoms';
import { theme, Theme } from '../../theme';
import styled, { ThemeProps } from 'styled-components';

interface Props {
  disabled: boolean;
  label?: string;
  placeholder?: string;
  help?: string;
  icon?: string;
  error?: string;
  value?: string;
  onChange?: Function; //TODO type
}

export type TextInputProps = Props & ThemeProps<Theme> & BoxProps;

const StyledInput = styled.input<TextInputProps>`
  background-color: ${({ theme }: TextInputProps) => theme.colors.grey.light[4]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, error }: TextInputProps) =>
    error ? theme.colors.error.normal : theme.colors.grey.light[2]};
  padding: 8px;
  color: ${({ theme }: TextInputProps) => theme.colors.grey.dark[2]};
  font-family: ${({ theme }: TextInputProps) => theme.fonts.paragraph};
  min-width: 200px;
  outline: none;

  ::placeholder {
    color: ${({ theme }: TextInputProps) => theme.colors.grey.light[2]};
    opacity: 1; /* Firefox */
  }

  :focus {
    border-color: ${({ theme }: TextInputProps) => theme.colors.primary.normal};
  }

  :disabled {
    border-color: ${({ theme }: TextInputProps) => theme.colors.grey.light[3]};
    :hover {
      cursor: not-allowed;
    }
    ::placeholder {
      color: ${({ theme }: TextInputProps) => theme.colors.grey.light[3]};
    }
  }
`;

export const TextInput = ({
  label,
  placeholder,
  help,
  theme,
  disabled,
  error,
  value,
  onChange,
  ...boxProps
}: TextInputProps) => {
  return (
    <Box {...boxProps}>
      {label && (
        <Paragraph color={theme.colors.grey.dark[2]} lineHeight="10%">
          {label}
        </Paragraph>
      )}
      <StyledInput
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        type="text"
        value={value}
        onChange={(event: FormEvent<HTMLInputElement>) => onChange && onChange(event)}
      />
      {error && (
        <Paragraph color={theme.colors.error.normal} paragraphSize="small">
          {error}
        </Paragraph>
      )}
      {help && <Paragraph paragraphSize="small">{help}</Paragraph>}
    </Box>
  );
};

TextInput.defaultProps = {
  theme,
  disabled: false,
};
