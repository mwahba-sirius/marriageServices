import React, { useImperativeHandle } from "react";
import { IStepRef } from "../utils";
import { IRevisionData } from "../models/revisiondata";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import { XTextField as TextField } from "../components/TextField";
import { MarriageTypeOptions, Towns, MarriageType, DivorcePaperTypes, DivorcePaperType } from "../constants";

interface IRevisionDataProps {
    defaultValues?: IRevisionData;
}

export const RevisionData = React.forwardRef<IStepRef, IRevisionDataProps>((props, ref) => {
    const { defaultValues } = props;
    const form = useForm<IRevisionData>({ defaultValues });
    const marriageType = form.watch("marriageData.marriageType");
    const marriagePaperType = form.watch("marriageData.marriagePaperType");
    const divorceType = form.watch("divorceData.divorceType");
    const divorcePaperType = form.watch("divorceData.divorcePaperType");
    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            func(form.getValues());
            return true;
        }
    }))
    return (

        <Grid container rowSpacing={3} columnSpacing={3}>

            <Grid item xs={4}>
                <TextField control={form.control} label="نوع الزواج" name="marriageData.marriageType" type="select" options={MarriageTypeOptions} />
            </Grid>
            <Grid item xs={4}>
                <TextField control={form.control} label="مكتب التوثيق" name="marriageData.docOffice" type="select" options={Towns} />
            </Grid>
            <Grid item xs={4}>
                {marriageType === MarriageType.inCountry && (
                    <TextField control={form.control} label="" name="marriageData.marriagePaperType" type="select" options={DivorcePaperTypes} />
                )}
            </Grid>

            {String(marriagePaperType) === String(DivorcePaperType.Machined) && (
                <>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="السنه" name="marriageData.year" type="number" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="الحرف" name="marriageData.letter" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="المسلسل" name="marriageData.serial" />
                    </Grid>
                </>
            )}

            <Grid item xs={4}>
                <TextField control={form.control} label="دخل بها" name="marriageData.hadSex" type="select" options={[{ label: "دخل بها", value: String(true) }, { label: "لم يدخل بها", value: String(false) }]} />
            </Grid>
            <Grid item xs={4}>
                <TextField control={form.control} label="مؤخر الصداق" name="marriageData.lateMosadqa" />
            </Grid>
            <Grid item xs={4}>
                <TextField control={form.control} label="تاريخ الزواج" name="marriageData.marriageDate" />
            </Grid>
            {/* --------- DIVORCE DATA ------------------*/}

            <Grid item xs={4}>
                <TextField control={form.control} label="نوع الطلاق" name="divorceData.divorceType" type="select" options={MarriageTypeOptions} />
            </Grid>
            <Grid item xs={4}>
                <TextField control={form.control} label="مكتب التوثيق" name="divorceData.docOffice" type="select" options={Towns} />
            </Grid>
            <Grid item xs={4}>
                {divorceType === MarriageType.inCountry && (
                    <TextField control={form.control} label="" name="divorceData.divorcePaperType" type="select" options={DivorcePaperTypes} />
                )}
            </Grid>

            {String(divorcePaperType) === String(DivorcePaperType.Machined) && (
                <>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="السنه" name="divorceData.year" type="number" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="الحرف" name="divorceData.letter" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField control={form.control} label="المسلسل" name="divorceData.serial" />
                    </Grid>
                </>
            )}

        </Grid>
    )

});