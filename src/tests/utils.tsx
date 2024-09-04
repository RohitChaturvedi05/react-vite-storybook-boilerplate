import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src/theme';

export const renderWithTheme = (
    component: React.ReactElement,
    theme?: 'light' | 'dark'
) => {
    const selectedTheme = createTheme(theme ?? 'light');
    return render(
        <ThemeProvider theme={selectedTheme}>{component}</ThemeProvider>
    );
};
