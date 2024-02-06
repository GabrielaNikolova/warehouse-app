import { SelectProps } from './SelectField.static';
import SelectStyle from './SelectField.style';

export default function SelectField({ ...props }: SelectProps) {
    return (
        <SelectStyle>
            <label>{props.label}</label>
            <select id={props.label} value={props.value} name={props.name}>
                {props.options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {props.error && <p className="error">{props.errorMessage}</p>}
        </SelectStyle>
    );
}
