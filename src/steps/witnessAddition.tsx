import { IPerson } from "../models/person"
import { Button } from "@mui/material";
import { IStepRef, createPerson } from "../utils";
import { useForm } from "react-hook-form";
import { WitnessData } from "./witnessData";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useImperativeHandle } from "react";

const validation = () => yup.object({
    witnesses: yup.array(yup.object({
        authorizationCredType: yup.string().required(),
        authorizationNumber: yup.string().required(),
        name: yup.string().required()
    }))
})
interface IWitnessAddition {
    defaultValues? :IPerson[];
}

export const WitnessAddition = React.forwardRef<IStepRef,IWitnessAddition>((props, ref) => {
    const witnessesForm = useForm<{ witnesses: IPerson[] }>({ defaultValues: { witnesses: props.defaultValues }, resolver: yupResolver(validation()) as any, mode: "all" });
    const witnesess = witnessesForm.watch("witnesses");
    useImperativeHandle(ref,() => ({
        onNext: async (func) => {
            if (! (await witnessesForm.trigger()))
                return false;
            func(witnessesForm.getValues());
            return true;
        }

    }))
    return (<div style={{ width: "100%" }}>
        <Button variant="outlined" onClick={() => {
            const prevWit = witnessesForm.getValues().witnesses;
            witnessesForm.setValue("witnesses", [...prevWit, createPerson({ name: `شاهد ${prevWit.length}` })])
        }}>اضافة شاهد</Button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {witnesess.map((x, i) => {
                return (
                    <>
                        <div style={{ height: "4rem", fontSize: "1.5rem", backgroundColor: "#d2d2d2", width: "100%", marginBlock: "1rem", fontWeight: "bold", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {x.name}
                        </div>
                        <WitnessData formState={witnessesForm.formState} control={witnessesForm.control} index={i} />
                    </>
                )
            })}
        </div>
    </div>)
});