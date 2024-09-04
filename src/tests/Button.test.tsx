import React from 'react';
import { describe, expect, it } from 'vitest';
import { Button } from '../src/components/Button';
import { createTheme } from '../src/theme';
import { renderWithTheme } from './utils';

describe('Button component', () => {
    it('Button should render correctly', () => {
        const theme = createTheme('light');
        const { container } = renderWithTheme(<Button>Button</Button>);
        expect(container).toMatchSnapshot();
    });
});
