import FormButton from '../Common_components/Button/Button';
import { Container } from '../Common_components/Global.style';

interface Props {
    error: Error;
    resetErrorBoundary: () => void;
}

function NotFound({ error, resetErrorBoundary }: Props) {
    console.log('Error occured', error);
    return (
        <Container>
            <h1>Oppps, Something went wrong! Page not found!</h1>
            <p>Try clicking the return to web page button to reload the application. </p>
            <FormButton type={'button'} btnText={'Return to Webpage'} onClick={resetErrorBoundary} />
        </Container>
    );
}

export default NotFound;
