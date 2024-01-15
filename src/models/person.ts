import { Religions } from "../constants";

export interface IPerson {
    name : string;
    dob : Date;
    placeOfBirth : string;
    fatherName : string;
    grandFatherName : string;
    motherName : string;
    religion : Religions;
    nationality : string;
    job : string;
    jobPlace : string;
    authorizationCredType : string;
    authorizationNumber : string;
    issuingCountry : string;
    issuingDate : string;
    town : string;
    city : string;
    address : string;
    adTargetAddress : string;
    letter : string;
    printedNumber : string;
    wifeNickName : string;
    email : string;
    phoneNumber : string;
    gender : string;
    socialStatus: string;
    notes : string;
    marriedBefore : boolean;
}
export interface IPreviousFiance {
    name : string;
    status : "dead" | "divorced" | "stillMarried";
    nationality : string;
    childrenNum : number;
    deathDate : Date;
    divorceDate : Date;
    evidencedBy : string;
    currentHusband : boolean;
    enteredHer : boolean;
    address : string;
}