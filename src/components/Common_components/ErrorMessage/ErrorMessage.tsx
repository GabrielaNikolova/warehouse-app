import { PropsWithChildren } from 'react';
import ErrorMessageStyled from './ErrorMessage.style';

export default function ErrorMessage({ children }: PropsWithChildren) {
    return (
        <ErrorMessageStyled>
            <span>{children}</span>
        </ErrorMessageStyled>
    );
}
