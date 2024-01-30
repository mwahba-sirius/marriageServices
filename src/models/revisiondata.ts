import { DivorcePaperType, MarriageType } from "../constants"

export interface IRevisionData {
    marriageData : {
        marriageType : MarriageType;
        marriagePaperType : DivorcePaperType;
        lateMosadqa : string;
        docOffice : string;
        year : string;
        letter : string;
        serial : string;
        hadSex: boolean;
        marriageDate : string;
        notes : string;
    },
    divorceData : {
        divorceType : MarriageType;
        divorcePaperType :DivorcePaperType;
        docOffice : string;
        year : string;
        letter : string;
        serial : string;
        previousDivorceNo : number;
        marriedAntother : string;
        attendance : string;
        notes : string;
    }
}