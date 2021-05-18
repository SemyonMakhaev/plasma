import React from 'react';
import styled from 'styled-components';
import { general, additional } from '@sberdevices/plasma-colors';
import { white, whiteSecondary, black } from '@sberdevices/plasma-tokens-web';

import { InSpacingDecorator } from '../helpers';

import { Body1, Caption } from './Typography';

export default {
    title: 'Colors',
    decorators: [InSpacingDecorator],
};

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 200px);
`;
const StyledTile = styled.div`
    position: relative;

    padding-bottom: 50%;
`;
const StyledColorCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    padding: 12px;
`;

const flattenColors = (colors: typeof general) =>
    Object.entries(colors).reduce((rowAcc, [, row]) => {
        return rowAcc.concat(
            Object.entries(row)
                .reduce((colAcc, [sat, hex]) => {
                    return colAcc.concat([[sat, hex]]);
                }, [])
                .sort((a, b) => b[0] - a[0]),
        );
    }, []);
const generalColors = flattenColors(general);
const additionalColors = flattenColors((additional as unknown) as typeof general);
const textColors = {
    1000: [white, whiteSecondary],
    950: [white, whiteSecondary],
    900: [white, whiteSecondary],
    850: [white, whiteSecondary],
    800: [white, whiteSecondary],
    700: [white, whiteSecondary],
    600: [white, whiteSecondary],
    500: [white, whiteSecondary],
    400: [white, whiteSecondary],
    300: [black, black],
    250: [black, black],
    200: [black, black],
    150: [black, black],
    100: [black, black],
};

const ColorsGrid = ({ colors }: { colors: typeof generalColors }) => (
    <StyledGrid>
        {colors.map(([sat, hex], i) => (
            <React.Fragment key={`item:${i}`}>
                <StyledTile style={{ background: hex }}>
                    <StyledColorCard>
                        <Body1 style={{ color: textColors[sat][0] }}>{sat}</Body1>
                        <Caption style={{ color: textColors[sat][1] }}>{hex}</Caption>
                    </StyledColorCard>
                </StyledTile>
            </React.Fragment>
        ))}
    </StyledGrid>
);

export const General = () => <ColorsGrid colors={generalColors} />;

export const Additional = () => <ColorsGrid colors={additionalColors} />;
