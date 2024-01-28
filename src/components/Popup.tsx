import { Modal, Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface IPopupProps {
    show : boolean;
    onClose : () => void;
}
export const Popup: React.FC<PropsWithChildren<IPopupProps>> = (props) => {
    const { children,show,onClose} = props;
    return (
        <Modal
            open={show}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "900px",
                bgcolor: 'background.paper',
                boxShadow: 24,
                fontSize: "24px"
            }}>
                {children}
                <div style={{height : "1rem"}} />
            </Box>
        </Modal>
    )
}