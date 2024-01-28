import { Button } from "@mui/material"
import React, { ReactElement, useState } from "react"

interface IStepperProps {
    serviceName?: string;
    steps: { element: () => React.ReactNode, stepName: string, actions?: ReactElement, onNext: () => Promise<boolean>, onPrevious?: () => void }[]
}
export const Stepper = (props: IStepperProps) => {
    const { steps, serviceName } = props;
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <>
            <div style={{ marginInline: "1rem", width: "300px", borderRadius: "5px", height: "auto", backgroundColor: "#F1F1F1", display: "flex", flexDirection: "column" }}>
                <div style={{ marginRight: "1rem", marginTop: "2rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: "bolder", marginBottom: "2rem" }}>
                        {serviceName}
                    </div>
                    {steps.map((x, i) => (
                        <>
                            <div style={{ marginBlock: "2rem", color: currentStep === i ? "#2A71F0" : currentStep > i ? "#4b69b4" : "gray", fontWeight: currentStep === i ? "bolder" : "bold" }}>
                                <span style={{ border: "1px solid #4b69b4", borderRadius: "200px", paddingBlock: "5px", paddingInline: "10px", color: "#4b69b4", marginLeft: "1rem", marginBlock: "", fontWeight: currentStep === i ? "bolder" : "normal" }}>{i + 1}</span> {x.stepName}
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "70%" }}>

                <div style={{ backgroundColor: "white", padding: "3rem", width: "100%", border: "2px #EBF2FD solid" }}>
                    <div style={{ fontSize: "1.3rem", fontWeight: "bolder", marginBottom: "1rem",color : "#2A71F0" }}>
                        الخطوه {currentStep + 1} / {steps.length}
                    </div>
                    <div style={{ fontSize: "2.5rem", fontWeight: "bold",marginBottom : "2rem" }}>{steps[currentStep].stepName}</div>
                    {steps[currentStep].element()}

                    <div style={{ width: "100%", height: "2rem", paddingInline: "3rem", paddingBlock: "3rem", color: "white", fontSize: "2.5rem", fontWeight: "bold", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        {currentStep > 0 && (<Button variant='contained' style={{ border: "1px solid #2A71F0", boxShadow: "none", fontSize: "1.2rem", borderRadius: "100px", backgroundColor: "white", color: "gray", borderColor: "#4b69b4 !important" }} onClick={() => {
                            setCurrentStep(prev => prev - 1)
                        }} color="error" >
                            <span style={{ marginLeft: "4rem" }}>
                                السابق
                            </span>
                        </Button>)}
                        <Button variant='contained' style={{ border: "1px solid #2A71F0", boxShadow: "none", fontSize: "1.2rem", borderRadius: "100px", backgroundColor: "#2A71F0", color: "white", borderColor: "#4b69b4 !important" }} onClick={async () => {

                            if (await steps[currentStep].onNext()) {
                                setCurrentStep(prev => prev + 1)
                            }
                        }} color="success" >
                            <span style={{ marginRight: "4rem" }}>
                                التالي
                            </span>
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}