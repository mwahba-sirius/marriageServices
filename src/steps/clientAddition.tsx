import { Box, Grid, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { FieldName, XTextField as TextField } from "../components/TextField";
import { IClient } from "../models/client";
import React, { useImperativeHandle } from "react";
import { IStepRef } from "../utils";
import { Popup } from "../components/Popup";

interface IClientAdditionProps {
    defaultValues?: IClient;
}
export const ClientAddition = React.forwardRef<IStepRef, IClientAdditionProps>((props, ref) => {


    const form = useForm<IClient>({ defaultValues: props.defaultValues });
    const providerType = form.watch("providerType");
    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            func(form.getValues());
            return true;
        }
    }))
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12}>
                    <TextField label="بيانات التوكيل" control={form.control} name="authorizationType" type="select" options={[{ label: "داخل البلاد", value: "داخل البلاج" }, { label: "خارج البلاد", value: "خارج البلاد" }]} />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="صفة مقدم المعامله" control={form.control} name="name" type="select" />

                </Grid>
                <Grid item xs={4}>
                    <FieldName>نوع الشخصيه</FieldName>
                    {providerType}
                </Grid>
                <Grid item xs={4}>

                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="اسم العميل" control={form.control} name="name" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="تاريخ الميلاد" control={form.control} name="dob" type="date" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="محل الميلاد" control={form.control} name="placeOfBirth" />
                </Grid>


                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField type="select" placeholder="dsdsdsd" options={[{ label: "ذكر", value: "male" }, { label: "أنثي", value: "female" }]} label="النوع" control={form.control} name="gender" /> </Grid>
                <Grid item xs={4}>
                    <TextField label="الديانه" control={form.control} name="religion" type="select" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="الجنسيه" control={form.control} name="nationality" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="نوع الاثبات" control={form.control} name="authurizationCredType" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="رقم الاثبات" control={form.control} name="authorizationNumber" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="جهة الاصدار" control={form.control} name="issuingEntity" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="تاريخ الاصدار" control={form.control} name="issuanceDate" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="المحافظه" control={form.control} name="town" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="القسم" control={form.control} name="city" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="العنوان" control={form.control} name="address" />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="رقم الهاتف" control={form.control} name="phoneNumber" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="المهنه" control={form.control} name="job" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={4}>
                    <TextField label="الحرف" control={form.control} name="letter" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="الرقم المطبوع" control={form.control} name="printedNumber" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="البريد الالكتروني" control={form.control} name="email" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={6}>
                    <TextField rows={4} multiline label="الملاحظات" control={form.control} name="notes" />
                </Grid>

            </Grid>
        </>
    );
})