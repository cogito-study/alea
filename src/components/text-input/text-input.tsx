import React, { ChangeEvent, ReactNode, useState, HTMLProps } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Box, BoxProps, Paragraph, Flex } from '../../atoms';
import { theme, Theme } from '../../theme';

interface Props {
  disabled: boolean;
  label?: string;
  placeholder?: string;
  help?: string;
  icon?: ReactNode;
  error?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type TextInputProps = Props & ThemeProps<Theme> & BoxProps;

interface StateProps {
  focused: boolean;
  disabled: boolean;
  error: boolean;
}

interface IconProps {
  icon: ReactNode;
}

type StyledInputContainerProps = StateProps & IconProps & ThemeProps<Theme>;

const StyledInputContainer = styled(Flex)<StyledInputContainerProps>`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  position: relative;

  background-color: ${({ theme }: StyledInputContainerProps) => theme.colors.grey.light[4]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, error, disabled, focused }: StyledInputContainerProps) =>
    focused
      ? theme.colors.primary.normal
      : error
      ? theme.colors.error.normal
      : disabled
      ? theme.colors.grey.light[3]
      : theme.colors.grey.light[2]};
  padding: ${({ theme }: StyledInputContainerProps) => theme.spaces[2] + 'px'};
  font-family: ${({ theme }: StyledInputContainerProps) => theme.fonts.paragraph};
  max-width: 280px;
  outline: none;

  & > input ~ div > svg {
    fill: ${({ theme: { colors }, error, focused }: StyledInputContainerProps) =>
      focused ? colors.primary.normal : error ? colors.error.normal : colors.grey.light[2]};
  }

  & > input:disabled ~ div > svg {
    fill: ${({ theme: { colors } }: StyledInputContainerProps) => colors.grey.light[3]};
  }
`;

export type StyledInputProps = ThemeProps<Theme> & HTMLProps<HTMLInputElement>;

const StyledInput = styled.input<StyledInputProps>`
  border: none;
  color: ${({ theme }: StyledInputProps) => theme.colors.grey.dark[2]};
  outline: none;
  background-color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[4]};

  ::placeholder {
    color: ${({ theme }: StyledInputProps) => theme.colors.grey.light[2]};
    opacity: 1; /* Firefox */
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
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 8px;
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
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  return (
    <Box {...boxProps}>
      {label && (
        <Paragraph color="grey.dark.2" marginBottom="4px">
          {label}
        </Paragraph>
      )}
      <StyledInputContainer focused={focused} disabled={disabled} theme={theme} error={!!error} icon={icon}>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          type="text"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event)}
          onFocus={onFocus}
          onBlur={onBlur}
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
