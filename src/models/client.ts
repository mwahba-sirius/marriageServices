export interface IClient {
    authorizationType  : "inCountry" | "outCountry";
    providerAuthorizedAs: string;
    providerType : string;
    name : string;
    dob : Date;
    placeOfBirth : string;
    gender : string;
    religion : "Muslim" | "Christian";
    nationality : string;
    job : string;
    authurizationCredType : string;
    authorizationNumber : string;
    
    issuingEntity : string;
    issuanceDate : Date;
    town : string;
    city : string;
    address : string;
    letter : string;
    printedNumber : string;
    email : string;
    phoneNumber : string;
    notes : string;
}