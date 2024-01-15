import { Button } from "@mui/material"
import React, { ReactElement, useState } from "react"

interface IStepperProps {
    steps: { element: () => React.ReactNode, stepName: string, actions?: ReactElement, onNext: () => Promise<boolean>, onPrevious?: () => void }[]
}
export const Stepper = (props: IStepperProps) => {
    const { steps } = props;
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <>
            <div style={{ width: "200px", height: "auto", backgroundColor: "white", borderLeft: "1px solid #4b69b4", borderLeftStyle: "solid", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "5rem", backgroundColor: "#4b69b4" }} />
                <div style={{ marginRight: "1rem", marginTop: "2rem" }}>
                    {steps.map((x, i) => (
                        <>
                            <div style={{ marginBlock: "1rem", color: currentStep === i ? "#4b69b4" : currentStep > i ? "gray" : "black", fontWeight: currentStep === i ? "bold" : "normal" }}>
                                - {x.stepName}
                            </div>
                            <div style={{ height: "1px", backgroundColor: "gray", width: "100%" }} />
                        </>
                    ))}
                </div>
                <div style={{ marginTop: "auto", height: "6rem", backgroundColor: "#4b69b4" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "70%" }}>
                <div style={{ width: "100%", height: "5rem", backgroundColor: "#4b69b4", paddingInline: "3rem", paddingBlock: "2rem", color: "white", fontSize: "2.5rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    {steps[currentStep].stepName}
                </div>
                <div style={{ backgroundColor: "white", padding: "3rem", width: "100%" }}>
                    {steps[currentStep].element()}
                </div>

                <div style={{ width: "100%", height: "2rem", backgroundColor: "#4b69b4", paddingInline: "3rem", paddingBlock: "3rem", color: "white", fontSize: "2.5rem", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {currentStep > 0 && (<Button variant='contained' style={{ fontSize: "2rem" }} onClick={() => {
                        setCurrentStep(prev => prev - 1)
                    }} color="error" >السابق</Button>)}
                    <Button variant='contained' style={{ fontSize: "2rem" }} onClick={async () => {

                        if (await steps[currentStep].onNext()) {
                            setCurrentStep(prev => prev + 1)
                        }
                    }} color="success" >التالي</Button>
                </div>
            </div>
        </>
    )
}