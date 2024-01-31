import { Modal, Box, Typography, Grid, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPreviousFiance } from "../models/person";
import { XTextField as TextField } from "../components/TextField";
import { useState } from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "900px",
    bgcolor: 'background.paper',
    boxShadow: 24

};

interface IPreviousFianceProps {
    gender: "male" | "female";
    open: boolean;
    onClose: () => void;
    save: (pf: IPreviousFiance) => void;
}
export const PreviousFianceModal = (props: IPreviousFianceProps) => {
    const { gender, open, onClose } = props;
    const form = useForm<IPreviousFiance>({ defaultValues: {} });
    const status = form.watch("status");
    return (<>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ width: "100%", height: "4rem", backgroundColor: "#4b69b4", marginBottom: "3rem", color: "white", fontWeight: "bolder", fontSize: "24px", textAlign: "center" }}>
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
                                <TextField control={form.control} name="nationality" label="جنسية الزوجه" />
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
                <div style={{ width: "100%", height: "4rem", backgroundColor: "#4b69b4", color: "white", fontWeight: "bolder", fontSize: "24px", display: "flex", justifyContent: "space-around", paddingBlock: "1rem" }}>

                    <Button
                        variant='contained'
                        onClick={
                            () => onClose()}
                        style={{ fontSize: "2rem", height: "2.5rem" }} color="error" >الغاء</Button>
                    <Button variant='contained' onClick={() => {
                        props.save(form.getValues())
                        onClose();
                    }} style={{ fontSize: "2rem", height: "2.5rem" }} color="success" >اضافة</Button>
                </div>
            </Box>
        </Modal>
    </>)
}