import { DivorceAttendanceStatus, DivorcePaperType, MarriageType } from "../constants";

export interface IDivorceData {
   marriageType : MarriageType;
   docOffice : string;
   year? : string;
   letter? : string;
   serial? :string;
   marriageDate : Date;
   mosadqaLate : string;
   divorcePaperType : DivorcePaperType;
   notes : string;
   previousDivorcesNo : number;
   divorceDate : Date;
   hadSex? : boolean;
   divorceType : string;
   divorceMethod : string;
   earlyMosadqa : string;
   attendanceStatus : DivorceAttendanceStatus; 
}