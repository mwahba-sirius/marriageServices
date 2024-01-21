import { useForm } from "react-hook-form";
import React, { useImperativeHandle, useState } from "react";
import { IStepRef } from "../utils";
import { IAttachment } from "../models/attachments";

interface IAttachmentProps {
    defaultValues?: IAttachment;
}
export const Attachment = React.forwardRef<IStepRef, IAttachmentProps>((props, ref) => {
    const form = useForm<IAttachment>({ defaultValues: props.defaultValues });
    const cardId = form.watch("cardId");
    const photoPicture = form.watch("photoPicture");
    const [cardPic, setFilesBase64] = useState<string>("")
    const [personalPhoto, setFileBase64] = useState<string>("")

    function formSubmit(e: any) {
        e.preventDefault();
    }

    function convertFile(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("this file uploaded is of type:", fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev: any) => {
                // convert to base64
                setFilesBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }

        }
    }

    function convert(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("this file uploaded is of type:", fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev: any) => {
                // convert to base64
                setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }

        }
    }


    return (
        <div>
            <div className="col-3">
                اختر الصوره الشخصيه
                <form onSubmit={formSubmit}>
                    <input type="file" onChange={(e) => convertFile(e.target.files)} />
                    <hr />
                    {cardPic &&
                        <>
                            {(cardPic.indexOf("image/") > -1) &&
                                <img src={cardPic} width={200} />}

                            {(cardPic.indexOf("video/") > -1) &&
                                <video controls>
                                    <source src={cardPic} />
                                </video>}

                            {(cardPic.indexOf("audio/") > -1) &&
                                <audio controls>
                                    <source src={cardPic} />
                                </audio>}
                            <hr />
                        </>
                    }
                </form>
            </div>

            <div className=" col-3">
                اختر البطاقه الشخصيه
                <form onSubmit={formSubmit}>
                    <input type="file" onChange={(e) => convert(e.target.files)} />
                    <hr />
                    {personalPhoto &&
                        <>
                            {(personalPhoto.indexOf("image/") > -1) &&
                                <img src={personalPhoto} width={100} />}

                            {(personalPhoto.indexOf("video/") > -1) &&
                                <video controls>
                                    <source src={personalPhoto} />
                                </video>}

                            {(personalPhoto.indexOf("audio/") > -1) &&
                                <audio controls>
                                    <source src={personalPhoto} />
                                </audio>}
                        </>
                    }
                </form>
            </div>
        </div>
    );
})