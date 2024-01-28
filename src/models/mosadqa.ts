export interface IMosadqa {
    sadaqType : string;
    sadaqValue : string;
    sadaqUpFront : string;
    sadaqLate : string;
    shabka : string;
    currency : string;
    egyptianEquivelant : string;
    wifeAddress : string;
    financialSystem : string;
    husbandProvided : string;
    wifeProvided : string;
    wifeIncomeType : string;
    marraigeRules : string;
    insuranceNumber : string;
    notes : string;
    previousMarriageData? : {
        childrenNum : number;
        evidencedBy : string;
        marriageDate : Date;
    }
    wifeIncomeValue : string;
}