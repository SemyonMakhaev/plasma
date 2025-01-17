import React from 'react';
import styled, { css } from 'styled-components';

interface StyledRootProps {
    cover?: boolean;
    disabled?: boolean;
    compact?: boolean;
}

const StyledRoot = styled.div<StyledRootProps>`
    display: flex;
    flex-direction: column;

    position: relative;

    box-sizing: border-box;
    padding: ${({ compact }) => (compact ? 0.375 : 1)}rem 1rem;

    border-radius: inherit;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}

    ${({ cover }) =>
        cover &&
        css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            justify-content: flex-end;

            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
        `}
`;

export interface CardContentProps extends StyledRootProps, React.HTMLAttributes<HTMLDivElement> {}

/**
 * Компонент для отображения как текстового, так и любого другого контента.
 */
export const CardContent: React.FC<CardContentProps> = ({ disabled, cover, compact, className, children, ...rest }) => {
    return (
        <StyledRoot cover={cover} compact={compact} disabled={disabled} className={className} {...rest}>
            {children}
        </StyledRoot>
    );
};
