import { Button } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const ServiceButton = ({ label, route }: { label: string, route?: string }) => {

    const navigate = useNavigate();
    return (

        <Button variant='contained' style={{ border: "1px solid #2A71F0", boxShadow: "none", fontSize: "1.2rem", borderRadius: "100px", borderColor: "#4b69b4 !important" }}
            onClick={() => { navigate(route || "") }}
            sx={{
                backgroundColor: "white",
                color: "#2A71F0",
                marginBlock: "1rem",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                '&:hover': {
                    backgroundColor: "#2A71F0",
                    color: "white"
                }
            }}
        >
            {label} <ArrowBackIcon />
        </Button>
    )
}


export const HomeService = () => {
    return (
        <div style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ border: "1px solid rgb(177 205 255)", width: "23%", padding: "3rem", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#2A71F0", marginBottom: "4rem" }}>الخدمات</div>
                <ServiceButton label="ادخال بيانات زواج" route="/marriage"/>
                <ServiceButton label="ادخال بيانات طلاق" route="/divorce"/>
                <ServiceButton label="ادخال بيانات مصادقه" route="/mosadqa"/>
                <ServiceButton label="ادخال بيانات مراجعه" route="/revision"/>
            </div>
        </div>
    )
}