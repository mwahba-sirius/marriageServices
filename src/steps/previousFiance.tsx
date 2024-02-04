import { Modal, Box, Typography, Grid, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPreviousFiance } from "../models/person";
import { XTextField as TextField } from "../components/TextField";
import { useEffect, useState } from "react";
import { COLORS, CountriesOptions, Towns } from "../constants";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs : "100%",md : "80%"},
    bgcolor: 'background.paper',
    boxShadow: 24,
    border : `2px solid ${COLORS.Primary}`

};

interface IPreviousFianceProps {
    gender: "male" | "female";
    open: boolean;
    onClose: () => void;
    defaultValues? : IPreviousFiance;
    save: (pf: IPreviousFiance) => void;
}
export const PreviousFianceModal = (props: IPreviousFianceProps) => {
    const { gender, open, onClose ,defaultValues} = props;
    const form = useForm<IPreviousFiance>({ defaultValues });
    useEffect(() => {form.reset(defaultValues)},[open])
    const status = form.watch("status");
    return (<>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ width: "100%", marginTop: "1rem", backgroundColor: "white", paddingBottom: "1rem", color: COLORS.Primary,borderBottom : `3px solid ${COLORS.Primary}`, fontWeight: "bolder", fontSize: "24px", textAlign: "center",marginBottom : "2rem" }}>
                    {gender === "female" ? "اضافة زوجه سابقه" : "اضافة زوج سابق"}
                </div>
                <Grid container paddingInline={4} paddingBottom={2} rowSpacing={3} columnSpacing={3}>
                    {gender === "female" ? (
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="name" label={"الاسم"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="status" label={"حالة الزواجه"} type="select" options={[{ label: "توفي عنه", value: "dead" }, { label: "طلقت منه", value: "divorced" }, { label: "لازالت في عصمته", value: "stillMarried" }]} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="nationality" label="جنسية الزوجه" type="select" options={CountriesOptions} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="childrenNum" label={"عدد الاطفال"} type="number" />
                            </Grid>
                            {(status === "dead" || status === "divorced") && (
                                <>
                                    <Grid item xs={12} md={6}>
                                        <TextField control={form.control} name={status === "dead" ? "deathDate" : "divorceDate"} label={status === "dead" ? "تاريخ الوفاه" : "تاريخ الطلاق"} type="date" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField control={form.control} name="evidencedBy" label={"كالثابت عن"} />
                                    </Grid>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="name" label={"الاسم"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField control={form.control} name="status" label={"موقف الزوجه الحالي"} type="select" options={[{ label: "توفي عنه", value: "dead" }, { label: "طلقت منه", value: "divorced" }]} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="الزوج الحالي" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="دخل بها" />
                            </Grid>
                            {(status === "dead" || status === "divorced") && (
                                <>
                                    <Grid item xs={12} md={6}>
                                        <TextField control={form.control} name={status === "dead" ? "deathDate" : "divorceDate"} label={status === "dead" ? "تاريخ الوفاه" : "تاريخ الطلاق"} type="date" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField control={form.control} name="evidencedBy" label={"كالثابت عن"} />
                                    </Grid>
                                </>
                            )}
                            <Grid item xs={12} md={6}>
                                <TextField multiline rows={4} control={form.control} name="address" label={"العنوان"} />
                            </Grid>
                        </>
                    )}
                </Grid>
                <div style={{ width: "100%", height: "4rem", backgroundColor: "white", color: COLORS.Primary, fontWeight: "bolder", fontSize: "24px", display: "flex", justifyContent: "space-around", paddingBlock: "1rem" ,borderTop : `3px solid ${COLORS.Primary}`}}>

                    <Button
                        variant='contained'
                        onClick={
                            () => onClose()}
                        style={{ fontSize: "2rem", height: "2.5rem",borderRadius : "3rem" }} color="error" >الغاء</Button>
                    <Button variant='contained' onClick={() => {
                        props.save(form.getValues())
                        onClose();
                    }} style={{ fontSize: "2rem", height: "2.5rem" ,borderRadius : "3rem"}} color="success" >اضافة</Button>
                </div>
            </Box>
        </Modal>
    </>)
}