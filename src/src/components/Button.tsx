import styled, { css } from 'styled-components';

export const Button = styled.button<{
    $type?: 'primary' | 'secondary';
    $displayStyle?: 'outline' | 'iconButton';
    disabled?: boolean;
}>`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.spacing.sm};
    border-radius: ${(props) => props.theme.radius.sm};
    cursor: pointer;

    ${({ theme, $type }) => {
        if ($type === 'secondary') {
            return css`
                background-color: ${theme.pallet.secondary.light};
                color: ${theme.pallet.secondary.text};
                &:hover {
                    background-color: ${theme.pallet.secondary.dark};
                }
            `;
        }

        return css`
            background-color: ${theme.pallet.primary.main};
            color: ${theme.pallet.primary.text};
            &:hover {
                background-color: ${theme.pallet.primary.dark};
            }
        `;
    }}

    ${({ $displayStyle }) => {
        if ($displayStyle === 'iconButton') {
            return css`
                padding: 8px;
                border-radius: 100%;
                background-color: transparent;
            `;
        }
    }}

  ${({ theme, disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            background-color: ${theme.pallet.secondary.dark};
            color: ${theme.pallet.secondary.text};
            opacity: 0.7;
            &:hover {
                background-color: ${theme.pallet.secondary.dark};
            }
        `}
  [dir="rtl"] & {
        svg {
            transform: rotate(180deg);
        }
    }
`;
