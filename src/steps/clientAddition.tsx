import { Box, Grid, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { FieldName, XTextField as TextField } from "../components/TextField";
import { IClient } from "../models/client";
import React, { useImperativeHandle } from "react";
import { IStepRef } from "../utils";
import { Popup } from "../components/Popup";
import { ApplicantType, ApplicantTypeOptions, AuthorizationTypeOptions, CountriesOptions, MarriageTypeOptions, ReligionOptions, Towns } from "../constants";

interface IClientAdditionProps {
    defaultValues?: IClient;
}
export const ClientAddition = React.forwardRef<IStepRef, IClientAdditionProps>((props, ref) => {


    const form = useForm<IClient>({ defaultValues: props.defaultValues });
    const providerType = form.watch("providerType");
    const providerAuthorizedAs = form.watch("providerAuthorizedAs");
    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            func(form.getValues());
            return true;
        }
    }))
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12} md={4}>
                    <TextField label="صفة مقدم المعامله" control={form.control} name="providerAuthorizedAs" type="select" options={ApplicantTypeOptions} />
                </Grid>
                {providerAuthorizedAs === ApplicantType.Attorney && (
                    <Grid item xs={12} md={4}>
                        <TextField label="بيانات التوكيل" control={form.control} name="authorizationType" type="select" options={MarriageTypeOptions} />
                    </Grid>
                )
                }
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>

                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField label="اسم العميل" control={form.control} name="name" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="تاريخ الميلاد" control={form.control} name="dob" type="date" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="محل الميلاد" control={form.control} name="placeOfBirth" type="select" options={CountriesOptions} />
                </Grid>


                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField type="select" placeholder="dsdsdsd" options={[{ label: "ذكر", value: "male" }, { label: "أنثي", value: "female" }]} label="النوع" control={form.control} name="gender" /> </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="الديانه" control={form.control} name="religion" type="select" options={ReligionOptions} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="الجنسيه" control={form.control} name="nationality" type="select" options={CountriesOptions} />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField label="نوع الاثبات" control={form.control} name="authurizationCredType" type="select" options={AuthorizationTypeOptions} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="رقم الاثبات" control={form.control} name="authorizationNumber" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="جهة الاصدار" control={form.control} name="issuingEntity" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField label="تاريخ الاصدار" control={form.control} name="issuanceDate" type="date" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="المحافظه" control={form.control} name="town" type="select" options={Towns}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="القسم" control={form.control} name="city" type="select" options={Towns} />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField label="العنوان" control={form.control} name="address" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField label="رقم الهاتف" control={form.control} name="phoneNumber" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="المهنه" control={form.control} name="job" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField label="الحرف" control={form.control} name="letter" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="الرقم المطبوع" control={form.control} name="printedNumber" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="البريد الالكتروني" control={form.control} name="email" />
                </Grid>

                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={6}>
                    <TextField rows={4} multiline label="الملاحظات" control={form.control} name="notes" />
                </Grid>

            </Grid>
        </>
    );
})