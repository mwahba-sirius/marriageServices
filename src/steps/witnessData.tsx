import { Control, FormState, UseFormRegister } from "react-hook-form"
import { IPerson } from "../models/person"
import { Grid } from "@mui/material";
import { FieldName, XTextField as TextField } from "../components/TextField";
import { AuthorizationTypeOptions, CountriesOptions, ReligionOptions, Towns } from "../constants";

interface IWitnessDataProps {
    control: Control<{ witnesses: IPerson[] }>;
    formState: FormState<{ witnesses: IPerson[] }>;
    index: number;
}
export const WitnessData = (props: IWitnessDataProps) => {
    const { control, index, formState } = props;
    return (
        <Grid container rowSpacing={3} columnSpacing={3}>
            {/** ---------- ROW  ---------- */}
            <Grid item xs={4}>
                <TextField label="اسم العميل" control={control} name={`witnesses.${index}.name`}
                    error={Boolean(formState.errors.witnesses?.[index]?.name)}
                    helperText={formState.errors.witnesses?.[index]?.name? formState.errors.witnesses?.[index]?.name?.message : ''}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField label="تاريخ الميلاد" control={control} name={`witnesses.${index}.dob`} type="date" />
            </Grid>
            <Grid item xs={4}>
                <TextField label="محل الميلاد" control={control} name={`witnesses.${index}.placeOfBirth`} />
            </Grid>


            {/** ---------- ROW  ---------- */}
            <Grid item xs={4}>
                <TextField type="select" placeholder="dsdsdsd" options={[{ label: "ذكر", value: "male" }, { label: "أنثي", value: "female" }]} disabled label="النوع" control={control} name={`witnesses.${index}.gender`} /> </Grid>
            <Grid item xs={4}>
                <TextField label="الديانه" control={control} name={`witnesses.${index}.religion`} type="select" options={ReligionOptions} />
            </Grid>
            <Grid item xs={4}>
                <TextField label="الجنسيه" control={control} name={`witnesses.${index}.nationality`} type="select" options={CountriesOptions} />
            </Grid>

            {/** ---------- ROW  ---------- */}
            <Grid item xs={4}>
                <TextField label="نوع الاثبات" control={control} name={`witnesses.${index}.authorizationCredType`} type="select" options={AuthorizationTypeOptions}

                    error={Boolean(formState.errors.witnesses?.[index]?.authorizationCredType)}
                    helperText={formState.errors.witnesses?.[index]?.authorizationCredType ? formState.errors.witnesses?.[index]?.authorizationCredType?.message : ''}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField label="رقم الاثبات" control={control} name={`witnesses.${index}.authorizationNumber`}

                    error={Boolean(formState.errors.witnesses?.[index]?.authorizationNumber)}
                    helperText={formState.errors.witnesses?.[index]?.authorizationNumber ? formState.errors.witnesses?.[index]?.authorizationNumber?.message : ''}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField label="جهة الاصدار" control={control} name={`witnesses.${index}.issuingCountry`} />
            </Grid>

            {/** ---------- ROW  ---------- */}
            <Grid item xs={4}>
                <TextField label="تاريخ الاصدار" control={control} name={`witnesses.${index}.issuingDate`}  type="date" />
            </Grid>
            <Grid item xs={4}>
                <TextField label="المحافظه" control={control} name={`witnesses.${index}.town`} type="select" options={Towns} />
            </Grid>
            <Grid item xs={4}>
                <TextField label="القسم" control={control} name={`witnesses.${index}.city`} type="select" options={Towns} />
            </Grid>

            {/** ---------- ROW  ---------- */}
            <Grid item xs={6}>
                <TextField label="العنوان" control={control} name={`witnesses.${index}.address`} />
            </Grid>

            <Grid item xs={6}>
                <TextField label="رقم الهاتف" control={control} name={`witnesses.${index}.phoneNumber`} />
            </Grid>

            {/** ---------- ROW  ---------- */}
            <Grid item xs={4}>
                <TextField label="الحرف" control={control} name={`witnesses.${index}.letter`} />
            </Grid>
            <Grid item xs={4}>
                <TextField label="الرقم المطبوع" control={control} name={`witnesses.${index}.printedNumber`} />
            </Grid>
            <Grid item xs={4}>
                <TextField label="البريد الالكتروني" control={control} name={`witnesses.${index}.email`} />
            </Grid>

            {/** ---------- ROW  ---------- */}
            <Grid item xs={6}>
                <TextField rows={4} multiline label="الملاحظات" control={control} name={`witnesses.${index}.notes`} />
            </Grid>


        </Grid>);

}