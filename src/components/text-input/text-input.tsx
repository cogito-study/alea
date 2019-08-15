import React, { ChangeEvent, HTMLProps, ReactElement } from 'react';
import { Box, Paragraph, BoxProps } from '../../atoms';
import { theme, Theme } from '../../theme';
import styled, { ThemeProps } from 'styled-components';

interface Props {
  disabled: boolean;
  label?: string;
  placeholder?: string;
  help?: string;
  icon?: ReactElement;
  error?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type TextInputProps = Props & ThemeProps<Theme> & BoxProps;

interface ExtraProps {
  withIcon: boolean;
  withError: boolean;
}

type StyledInputProps = ExtraProps & ThemeProps<Theme> & HTMLProps<HTMLInputElement>;

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[4]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, withError }: StyledInputProps) =>
    withError ? theme.colors.error.normal : theme.colors.grey.light[2]};
  padding: ${({ theme }: StyledInputProps) => theme.spaces[2] + 'px'};
  color: ${({ theme }: StyledInputProps) => theme.colors.grey.dark[2]};
  font-family: ${({ theme }: StyledInputProps) => theme.fonts.paragraph};
  min-width: 200px;
  outline: none;

  ::placeholder {
    color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[2]};
    opacity: 1; /* Firefox */
  }

  :focus {
    border-color: ${({ theme }: StyledInputProps) => theme.colors.primary.normal};
  }

  :disabled {
    border-color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[3]};
    :hover {
      cursor: not-allowed;
    }
    ::placeholder {
      color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[3]};
    }
  }
  padding-left: ${({ withIcon, theme }: StyledInputProps) =>
    withIcon ? theme.sizes.iconSmall + 2 * theme.spaces[2] + 'px' : theme.spaces[2] + 'px'};
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  position: relative;

  & > input:focus ~ div > svg {
    fill: red;
  }
`;

const IconContainer = styled(Box)`
  left: 0;
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
        <Paragraph color="grey.dark.2" marginBottom="4px">
          {label}
        </Paragraph>
      )}
      <StyledInputContainer>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          withError={!!error}
          type="text"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event)}
          withIcon={!!icon}
        />
        {icon && <IconContainer>{icon}</IconContainer>}
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
