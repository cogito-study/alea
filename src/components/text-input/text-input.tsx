import React, { ChangeEvent } from 'react';
import { Box, Paragraph, BoxProps } from '../../atoms';
import { theme, Theme } from '../../theme';
import styled, { ThemeProps } from 'styled-components';
import { EmailIcon } from '../../atoms/icon/icon';

interface Props {
  disabled: boolean;
  label?: string;
  placeholder?: string;
  help?: string;
  icon?: string;
  error?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;

  & > input:focus ~ svg {
    fill: red;
  }
`;

export const TextInput = ({
  label,
  placeholder,
  help,
  theme,
  disabled,
  icon,
  error,
  value,
  onChange,
  ...boxProps
}: TextInputProps) => {
  return (
    <Box {...boxProps}>
      {label && (
        <Paragraph color={theme.colors.grey.dark[2]} marginBottom="4px">
          {label}
        </Paragraph>
      )}
      <StyledInputContainer>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          type="text"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event)}
          style={{ paddingLeft: '30px' }}
        />
        {icon && <EmailIcon color="#345678" size="medium" variant="fill" style={{ marginRight: '-30px' }}></EmailIcon>}
      </StyledInputContainer>
      {error && (
        <Paragraph color={theme.colors.error.normal} paragraphSize="small" marginTop="8px">
          {error}
        </Paragraph>
      )}
      {help && (
        <Paragraph paragraphSize="small" marginTop="8px">
          {help}
        </Paragraph>
      )}
    </Box>
  );
};

TextInput.defaultProps = {
  theme,
  disabled: false,
};
