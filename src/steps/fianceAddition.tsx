import { useForm } from "react-hook-form"
import { IPerson, IPreviousFiance } from "../models/person"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import { XTextField as TextField } from "../components/TextField";
import { PreviousFianceModal } from "./previousFiance";
import { useImperativeHandle, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthorizationTypeOptions, AuthorizationTypes, COLORS, CountriesOptions, FemaleSocialStatusOptions, MaleSocialStatusOptions, ReligionOptions, SocialStatusCodes, Towns, shouldPreviousFianceesExist } from "../constants";
import React from "react";
import * as yup from "yup";
import { IStepRef } from "../utils";
import { useDispatch } from "react-redux";
import { popupActions } from "../store/popupReducer";

export enum PersonType {
    Male = 0,
    Female = 1
}
interface IFianceAdditionProps {
    gender: PersonType;
    defaultValues?: IPerson & { previousFiances: IPreviousFiance[] };
    showPreviousFiances?: boolean;
}
const validation = () => yup.object({
    authorizationCredType: yup.string().required(),
    authorizationNumber: yup.string().required(),
    address: yup.string().required()
})

export const FianceAddition = React.forwardRef<IStepRef, IFianceAdditionProps>((props: IFianceAdditionProps, ref) => {

    const { gender, showPreviousFiances } = props;
    const fianceForm = useForm<IPerson>({ defaultValues: { gender: String(props.gender), authorizationCredType: AuthorizationTypes.ID, ...props.defaultValues }, resolver: yupResolver(validation()) as any, mode: "onChange" });
    const socialStatus = fianceForm.watch("socialStatus");
    const [modalDate, setModalData] = useState<{ open: boolean, mode: "new" | "edit", defaultValues?: IPreviousFiance }>({ open: false, mode: "new" });

    const [previousFiancees, setPreviousFiancees] = useState<IPreviousFiance[]>(props.defaultValues?.previousFiances ?? []);
    const dispatch = useDispatch();
    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            if (!(await fianceForm.trigger()))
                return false;
            if (shouldPreviousFianceesExist(socialStatus as SocialStatusCodes) && previousFiancees.length === 0) {
                dispatch(popupActions.showPopup(<>برجاء ادخال بيانات الزواجات السابقه</>))
                return false;
            }
            func({ ...fianceForm.getValues(), previousFiances: previousFiancees });
            return true;
        }
    }))
    return (

        <>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="name" label={gender === PersonType.Male ? "اسم الزوج" : "اسم الزوجه"} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField type="date" control={fianceForm.control} name="dob" label="تاريخ الميلاد" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="placeOfBirth" label="محل الميلاد" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="fatherName" label="اسم الاب" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="grandFatherName" label="اسم الجد" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="motherName" label="اسم الام" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField disabled control={fianceForm.control} name="gender" label="النوع" type="select" options={[{ label: "ذكر", value: String(PersonType.Male) }, { label: "انثي", value: String(PersonType.Female) }]} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="religion" label="الديانه" type="select" options={ReligionOptions} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="nationality" label="الجنسيه" type="select" options={CountriesOptions} />
                </Grid>
                {/** ---------- ROW  ---------- */}

                <Grid item xs={12} md={6}>
                    <TextField control={fianceForm.control} name="job" label="المهنه" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField control={fianceForm.control} name="jobPlace" label="مكان جهة العمل" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="authorizationCredType" label="نوع الاثبات" type="select" options={AuthorizationTypeOptions}
                        required
                        error={Boolean(fianceForm.formState.errors["authorizationCredType"])}
                        helperText={fianceForm.formState.errors["authorizationCredType"] ? fianceForm.formState.errors["authorizationCredType"].message : ''}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="authorizationNumber" label="رقم الاثبات" required
                        error={Boolean(fianceForm.formState.errors["authorizationNumber"])}
                        helperText={fianceForm.formState.errors["authorizationNumber"] ? fianceForm.formState.errors["authorizationNumber"].message : ''}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="issuingCountry" label="جهة الاصدار" type="select" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="issuingDate" label="تاريخ الاصدار" type="date" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="town" label="المحافظه" type="select" options={Towns} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="city" label="القسم" type="select" options={Towns} />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={6}>
                    <TextField control={fianceForm.control} name="address" label="العنوان"
                        required
                        error={Boolean(fianceForm.formState.errors["address"])}
                        helperText={fianceForm.formState.errors["address"] ? fianceForm.formState.errors["address"].message : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField control={fianceForm.control} name="adTargetAddress" label="عنوان توجيه افلاعلانات" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="email" label="البريد الالكتروني" />
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={4}>
                    <TextField control={fianceForm.control} name="phoneNumber" label="رقم الهاتف" />
                </Grid>
                <Grid item xs={12} md={4}>
                    {showPreviousFiances &&
                        <TextField control={fianceForm.control} name="socialStatus" label="الحاله الاجتماعه" type="select" options={gender === PersonType.Female ? FemaleSocialStatusOptions : MaleSocialStatusOptions} />
                    }
                </Grid>
                {/** ---------- ROW  ---------- */}
                <Grid item xs={12} md={12}>
                    <TextField multiline rows={4} control={fianceForm.control} name="notes" label="الملاحظات" />
                </Grid>
                {shouldPreviousFianceesExist(socialStatus as SocialStatusCodes) && showPreviousFiances && (
                    <Grid item xs={12} md={12} >
                        <div style={{ border: `1px solid ${COLORS.Primary}` }}>
                            <div style={{ width: "100%", backgroundColor: "white", fontSize: "2rem", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", color: COLORS.Primary, borderBottom: `1px solid ${COLORS.Primary}` }}>
                                <div>
                                    زواجات سابقه
                                </div>

                                <Button variant='contained' style={{ fontSize: "1.2rem" }} onClick={() => { setModalData({ open: true, mode: "new", defaultValues: undefined }) }} sx={{ backgroundColor: `${COLORS.Primary}`, borderRadius: "2rem" }} >أضافه</Button>
                            </div>
                            {previousFiancees.map((x, i) => (
                                <div style={{ width: "100%", color: COLORS.Primary, marginBlock: "0.4rem", fontSize: "1.5rem", padding: "1rem", display: "flex", justifyContent: "space-around", borderBottom: `${i < (previousFiancees.length - 1) ? "1px" : "0px"} solid ${COLORS.Primary}` }}>
                                    {x.name}
                                    <div>
                                        <IconButton aria-label="delete" sx={{ border: `1px solid red`, borderRadius: "5px", marginInline: "1rem" }} color="error" onClick={() => { setPreviousFiancees(pvf => pvf.filter((p) => p.name !== x.name)) }} >
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" sx={{ border: `1px solid ${COLORS.Primary}`, borderRadius: "5px" }} color="primary" onClick={() => {
                                            setModalData({ open: true, mode: "edit", defaultValues: x});
                                        }}>
                                            <EditIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                )}
            </Grid>
            <PreviousFianceModal defaultValues={modalDate.defaultValues} gender={gender === PersonType.Male ? "female" : "male"} onClose={() => { setModalData(md => ({ open: false, mode: md.mode })) }} open={modalDate.open} save={(pf) => {
                if (previousFiancees.some((x) => x.name === pf.name) && modalDate.mode === "new") {
                    dispatch(popupActions.showPopup(<>يوجد زوج / زوجه سابقه بنفس الاسم</>))
                    return;
                }
                if (modalDate.mode === "new") {
                    setPreviousFiancees(ppf => [...ppf, pf])
                } else {
                    
                    setPreviousFiancees(ppf => ppf.map((x) => x.name === modalDate.defaultValues?.name ? pf : x));
                }
            }} />
        </>
    )
});