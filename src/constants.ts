export enum SocialStatusCodes {
    Divorced = "0",
    Widowed = "1",
    Married = "2",
    Virgin = "3"
}
export const MaleSocialStatusOptions = [
    {label : "مطلق",value : SocialStatusCodes.Divorced},
    {label : "ارمل",value : SocialStatusCodes.Widowed},
    {label : "متزوج",value : SocialStatusCodes.Married},
    {label : "اعزب",value : SocialStatusCodes.Virgin},
]

export const FemaleSocialStatusOptions = [
    {label : "مطلقه",value : SocialStatusCodes.Divorced},
    {label : "ارمله",value : SocialStatusCodes.Widowed},
    {label : "اعزب",value : SocialStatusCodes.Virgin},
]
export enum WifeIncomeType {
    salary = "salary",
    welllfare = "wellfare",
    noIncome = "noIncome"
}
export const WifeIncomeTypeOptions = [
    {label : "مرتب",value : WifeIncomeType.salary},
    {label : "معاش",value : WifeIncomeType.welllfare},
    {label : "لا يوجد",value : WifeIncomeType.noIncome},
]
export enum AuthorizationTypes {
    ID = "0"
}
export const AuthorizationTypeOptions = [
    {label : "رقم قومي",value : AuthorizationTypes.ID}
]
export enum Religions {
    muslim = "muslim",
    chrisitan = "christian"
}
export const ReligionOptions = [
    {label : "مسلم",value : Religions.muslim},
    {label : "مسيحي",value : Religions.chrisitan},
]
export const mosadqaOptions = [{
    label : "عملة", value : "currency"
}]
export const shouldPreviousFianceesExist = (ss : SocialStatusCodes) => ss !== SocialStatusCodes.Virgin && !!ss;