import { FlattenSimpleInterpolation } from 'styled-components';

export type CSSStateSelector = 'default' | 'hover' | 'active' | 'focus';
export type StyleFunction<T> = (props: T) => FlattenSimpleInterpolation;
export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl';
