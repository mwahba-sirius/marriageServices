import { MenuItem, StandardTextFieldProps, TextField, Typography } from "@mui/material";
import { Control, FieldPath, FieldValues, UseFormRegister, useController } from "react-hook-form";

interface ITextFieldProps<T extends FieldValues> extends StandardTextFieldProps {
    name: FieldPath<T>;
    control: Control<T>;
    type?: React.InputHTMLAttributes<unknown>['type'] | "select";
    options?: { label: string, value: string }[];
}
export const XTextField = <T extends FieldValues,>({ name, control, label, type, options, style, ...rest }: ITextFieldProps<T>) => {
    const controller = useController({ name, control });
    if (type === "select") {
        return (
            <div>
                <div style={{ fontSize: "1.15rem", marginBottom: "0.3rem", fontWeight: "bold" }}>{label}</div>

                <TextField variant="filled" InputLabelProps={{ shrink: true }} SelectProps={{ displayEmpty: true }} name={name} value={controller.field.value} onChange={controller.field.onChange} {...rest} fullWidth select

                    label={
                        <span style={{ fontSize: 24, fontWeight: "bold" }}>  </span>
                    }
                >
                    <MenuItem disabled value={undefined}>الرجاء الاختيار</MenuItem>
                    {options?.map((x) => (
                        <MenuItem key={x.value} value={x.value}>
                            {x.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
    return (<div>
        <div style={{ fontSize: "1.15rem", marginBottom: "0.3rem", fontWeight: "bold" }}>{label}</div>
        <TextField type={type} InputLabelProps={{ shrink: true }} variant="filled" {...rest} {...controller.field} fullWidth
            label={
                <span style={{ fontSize: 24, fontWeight: "bold" }}></span>
            }

            InputProps={{
                sx: {
                    "&::before": {
                        borderBottom: "0px solid rgba(0, 0, 0, 0.42)"
                    },
                    '&:hover': {
                        borderBottom: "0px solid rgba(0, 0, 0, 0.42)"
                    }
                }
            }}
        /></div>)
}
export const FieldName: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (<span style={{ display: "inline-block", marginInline: "1rem", minWidth: "8rem", fontSize: 20, fontWeight: "bold" }}>{children}</span>)
}