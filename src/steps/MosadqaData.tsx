import { Grid } from "@mui/material"
import { XTextField as TextField } from "../components/TextField"
import { useForm } from "react-hook-form"
import { IMosadqa } from "../models/mosadqa"
import { Religions, WifeIncomeType, WifeIncomeTypeOptions, mosadqaOptions } from "../constants"

export enum MosadqaMarriageType {
    NewMarriage = "0",
    ExistingMarriage = "1"
}
interface IMosadqaProps {
    husbandReligion: Religions;
    marraigeType: MosadqaMarriageType;
}

export const MosadqaData = (props: IMosadqaProps) => {
    const { husbandReligion, marraigeType } = props;
    const form = useForm<IMosadqa>();
    const wifeIncomeType = form.watch("wifeIncomeType");
    return (<>
        <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} md={6}>
                <TextField type="select" options={mosadqaOptions} label="نوع المصادقه" control={form.control} name="sadaqType" />
            </Grid>
            <Grid item xs={12} md={6}>
                {husbandReligion === Religions.chrisitan && (
                    <TextField label="الشبكه" control={form.control} name="shabka" />
                )}
            </Grid>
            {husbandReligion === Religions.muslim && (
                <>
                    <Grid item xs={12} md={4}>
                        <TextField label="قيمة صداق" control={form.control} name="sadaqValue" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField label="مقدم صداق" control={form.control} name="sadaqUpFront" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField label="موخر صداق" control={form.control} name="sadaqLate" />
                    </Grid>
                </>
            )}
            {marraigeType === MosadqaMarriageType.ExistingMarriage && (
                <>
                    <Grid item xs={12} md={4}>
                        <TextField label="عدد الاولاد" control={form.control} name="previousMarriageData.childrenNum"  type="number" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField label="كالثابت من" control={form.control} name="previousMarriageData.evidencedBy" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField label="تاريخ الزواج" control={form.control} name="previousMarriageData.marriageDate" type="date" />
                    </Grid>
                </>
            )}
            <>
                <Grid item xs={12} md={4}>
                    <TextField label="النظام المالي" control={form.control} name="financialSystem" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="قدم الزوج" control={form.control} name="husbandProvided" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="قدم الزوجه" control={form.control} name="wifeProvided" />
                </Grid>
            </>

            <Grid item xs={12} md={6}>
                <TextField type="select" options={WifeIncomeTypeOptions} label="اقرت الزوجه بانها" control={form.control} name="wifeIncomeType" />
            </Grid>
            <Grid item xs={12} md={6}>
                {(wifeIncomeType === WifeIncomeType.salary || wifeIncomeType === WifeIncomeType.welllfare) && (
                    <TextField label="قيمته" control={form.control} name="wifeIncomeValue" />
                )}
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField label="رقم وثيقة التامين" control={form.control} name="insuranceNumber" />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField label="شروط الزواج" control={form.control} name="marraigeRules" multiline rows={4} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label="ملاحظات" control={form.control} name="notes" multiline rows={4} />
            </Grid>
        </Grid>
    </>)
}