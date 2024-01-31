import { Checkbox, FormControlLabel, Grid } from "@mui/material"; import { useForm } from "react-hook-form";
import { IDivorceData } from "../models/divorcedata";
import { XTextField as TextField } from "../components/TextField";
import { DiverceMethodOptions, DivorceMethod, DivorcePaperType, DivorcePaperTypes, MarriageType, MarriageTypeOptions, SocialStatusCodes, Towns, shouldPreviousFianceesExist } from "../constants";
import { IStepRef } from "../utils";
import React, { useImperativeHandle } from "react";
import { popupActions } from "../store/popupReducer";

interface IDivorceDataProps {
    defaultValues?: IDivorceData;
}

export const DivorceData = React.forwardRef<IStepRef, IDivorceDataProps>((props, ref) => {

    const form = useForm<IDivorceData>({ defaultValues: props.defaultValues });
    const marriageType = form.watch("marriageType");
    const divorcePaperType = form.watch("divorcePaperType");
    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            func(form.getValues());
            return true;
        }
    }))
    return (
        <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="نوع الزواج" name="marriageType" type="select" options={MarriageTypeOptions} />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="مكتب التوثيق" name="docOffice" type="select" options={Towns} />
            </Grid>
            <Grid item xs={12} md={4}>
                {marriageType === MarriageType.inCountry && (
                    <TextField control={form.control} label="" name="divorcePaperType" type="select" options={DivorcePaperTypes} />
                )}
            </Grid>
            {divorcePaperType === DivorcePaperType.Machined && (
                <>
                    <Grid item xs={12} md={4}>
                        <TextField control={form.control} label="السنه" name="year" type="number" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField control={form.control} label="الحرف" name="letter" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField control={form.control} label="المسلسل" name="serial" />
                    </Grid>
                </>
            )}
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="تاريخ الزواج" name="marriageDate" type="date" />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="مؤخر الصداق" name="mosadqaLate" />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="عاجل الصداق" name="earlyMosadqa" />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="نوع الطلاق" name="divorceType" type="select" options={[{ label: "علي الابراء", value: "1" }]} />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="طريقة الطلاق" name="divorceMethod" type="select" options={DiverceMethodOptions} />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField control={form.control} label="دخل بها" name="hadSex" type="select" options={[{ label: "دخل بها", value: String(true) }, { label: "لم يدخل بها", value: String(false) }]} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField control={form.control} label="تاريخ الطلاق" name="divorceDate" type="date" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField control={form.control} label="عدد الطلاقات السابقه" name="previousDivorcesNo" type="number" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField control={form.control} label="الملاحظات" name="notes" type="string" multiline rows={4} />
            </Grid>
        </Grid>
    );
});