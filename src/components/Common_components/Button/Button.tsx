import { BtnStyle } from './Button.style';

export default function FormButton({ ...props }) {
    return (
        <BtnStyle className={props.className} type={props.type} onClick={props.onClick}>
            {props.btnText}
        </BtnStyle>
    );
}
