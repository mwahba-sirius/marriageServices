

import { useRef } from "react";
import { useDispatch, Provider, useSelector } from "react-redux";
import { ClientAddition } from "../steps/clientAddition";
import { FianceAddition } from "../steps/fianceAddition";
import { WitnessAddition } from "../steps/witnessAddition";
import { IMarriageState, marriageSliceActions } from "../store/marriageReducer";
import { IStepRef } from "../utils";
import { Stepper } from "../components/Stepper";
import { RootState } from "../store";
import { Attachment } from "../steps/attachment";
import { RevisionData } from "../steps/revisionDate";

export const RevisionService = () => {
    const clientAdditionRef = useRef<IStepRef | null>(null);
    const attachmentRef = useRef<IStepRef | null>(null);
    const revisionRef = useRef<IStepRef | null>(null);
    const husabdRef = useRef<IStepRef | null>(null);
    const wifeRef = useRef<IStepRef | null>(null);
    const witnessesRef = useRef<IStepRef | null>(null);
    const marriageSlice: IMarriageState = useSelector((state: RootState) => state.marriage);
    const dispatch = useDispatch();
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem", alignItems: "stretch" }}>
            <Stepper serviceName="ادخال بيانات مراجعه" steps={[
                {
                    element: () => <ClientAddition defaultValues={marriageSlice.client} ref={clientAdditionRef} />, stepName: "معلومات العميل", onNext: async () => {
                        return (await clientAdditionRef.current?.onNext((date) => dispatch(marriageSliceActions.setClient(date))) ?? true)
                    }
                },
                {
                    element: () => <FianceAddition defaultValues={marriageSlice.husband} ref={husabdRef} key={1} gender={0} />, stepName: "اضافة زوج", onNext: async () => {
                        return (await husabdRef.current?.onNext((date) => dispatch(marriageSliceActions.setHusband(date))) ?? true)
                    }
                },
                {
                    element: () => <FianceAddition defaultValues={marriageSlice.wife} ref={wifeRef} key={2} gender={1} />, stepName: "اضافة زوجه", onNext: async () => {
                        return (await wifeRef.current?.onNext((date) => dispatch(marriageSliceActions.setWife(date))) ?? true)
                    }
                },
                {
                    element: () => <WitnessAddition defaultValues={marriageSlice.witnesses} ref={witnessesRef} />, stepName: "بيانات الشهود", onNext: async () => {
                        return (await witnessesRef.current?.onNext((date) => dispatch(marriageSliceActions.setWitnesses(date.witnesses))) ?? true)
                    }
                },
                {
                    element: () => <RevisionData ref={revisionRef} defaultValues={marriageSlice.revision} />, stepName: "بيانات المراجعه", onNext: async () => {
                        return (await revisionRef.current?.onNext((data) => dispatch(marriageSliceActions.setRevisionData(data))) ?? true)
                    }
                },
                {
                    element: () => <Attachment defaultValues={marriageSlice.attachment} ref={attachmentRef} />, stepName: "المرفقات", onNext: async () => {
                        return (await attachmentRef.current?.onNext((date) => dispatch(marriageSliceActions.setAttachment(date))) ?? true)
                    }
                },
            ]
            } />
        </div>
    );
}