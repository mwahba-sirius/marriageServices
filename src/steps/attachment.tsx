import { useForm } from "react-hook-form";
import { IClient } from "../models/client";
import React, { useImperativeHandle, useState } from "react";
import { IStepRef } from "../utils";

interface IClientAdditionProps {
    defaultValues?: IClient;
}
export const Attachment = React.forwardRef<IStepRef, IClientAdditionProps>((props, ref) => {


    const form = useForm<IClient>({ defaultValues: props.defaultValues });
    const providerType = form.watch("providerType");

    useImperativeHandle(ref, () => ({
        onNext: async (func) => {
            func(form.getValues());
            return true;
        }
    }))

    const [filebase64, setFilesBase64] = useState<string>("")
    const [filesbase64, setFileBase64] = useState<string>("")

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
        <div className="App">
            <div className="col-md-6">
                اختر صوره شخصيه
                <form onSubmit={formSubmit}>
                    <input type="file" onChange={(e) => convertFile(e.target.files)} />
                    <hr />
                    {filebase64 &&
                        <>
                            {(filebase64.indexOf("image/") > -1) &&
                                <img src={filebase64} width={200} />}

                            {(filebase64.indexOf("video/") > -1) &&
                                <video controls>
                                    <source src={filebase64} />
                                </video>}

                            {(filebase64.indexOf("audio/") > -1) &&
                                <audio controls>
                                    <source src={filebase64} />
                                </audio>}
                            <hr />
                            <button>submit</button>
                        </>
                    }
                </form>
            </div>

            <div className=" col-md-6">
                اختر البطاقه الشخصيه
                <form onSubmit={formSubmit}>
                    <input type="file" onChange={(e) => convert(e.target.files)} />
                    <hr />
                    {filesbase64 &&
                        <>
                            {(filesbase64.indexOf("image/") > -1) &&
                                <img src={filesbase64} width={100} />}

                            {(filesbase64.indexOf("video/") > -1) &&
                                <video controls>
                                    <source src={filesbase64} />
                                </video>}

                            {(filesbase64.indexOf("audio/") > -1) &&
                                <audio controls>
                                    <source src={filesbase64} />
                                </audio>}
                            <hr />
                            <button>submit</button>
                        </>
                    }
                </form>
            </div>
        </div>
    );
})