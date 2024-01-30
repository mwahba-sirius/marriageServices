export enum SocialStatusCodes {
    Divorced = "0",
    Widowed = "1",
    Married = "2",
    Virgin = "3"
}
export const MaleSocialStatusOptions = [
    { label: "مطلق", value: SocialStatusCodes.Divorced },
    { label: "ارمل", value: SocialStatusCodes.Widowed },
    { label: "متزوج", value: SocialStatusCodes.Married },
    { label: "اعزب", value: SocialStatusCodes.Virgin },
]

export const FemaleSocialStatusOptions = [
    { label: "مطلقه", value: SocialStatusCodes.Divorced },
    { label: "ارمله", value: SocialStatusCodes.Widowed },
    { label: "اعزب", value: SocialStatusCodes.Virgin },
]
export enum WifeIncomeType {
    salary = "salary",
    welllfare = "wellfare",
    noIncome = "noIncome"
}
export const WifeIncomeTypeOptions = [
    { label: "مرتب", value: WifeIncomeType.salary },
    { label: "معاش", value: WifeIncomeType.welllfare },
    { label: "لا يوجد", value: WifeIncomeType.noIncome },
]
export enum AuthorizationTypes {
    ID = "0"
}
export const AuthorizationTypeOptions = [
    { label: "رقم قومي", value: AuthorizationTypes.ID }
]
export enum Religions {
    muslim = "muslim",
    chrisitan = "christian"
}
export const ReligionOptions = [
    { label: "مسلم", value: Religions.muslim },
    { label: "مسيحي", value: Religions.chrisitan },
]
export const mosadqaOptions = [{
    label: "عملة", value: "currency"
}]
export enum MarriageType {
    inCountry = "inCountry",
    outOfCountry = "outsideOfCountry"
}
export const MarriageTypeOptions = [
    { label: "داخل البلاد", value: MarriageType.inCountry },
    { label: "خارج البلاد", value: MarriageType.outOfCountry },
]
export const Towns = [
    { label: "القاهره", value: "Cairo" },
    { label: "الاسكندريه", value: "Alex" },
    { label: "الفيوم", value: "Fayoum" },
    { label: "المنوفيه", value: "Monofeya" }
]
export enum DivorceAttendanceStatus {
    bothAttended,
    wifeAbsent,
    husabndAbsent
}

export enum DivorceMethod {
    insistance
}
export const DiverceMethodOptions = [
    { label: "اصرار الزوج والزوجخ", value: String(DivorceMethod.insistance) },
]
export const DiverceAttendanceStatusOptions = [
    { label: "حضور الزوج و الزوجه", value: String(DivorceAttendanceStatus.bothAttended) },
    { label: "غياب الزوجه", value: String(DivorceAttendanceStatus.wifeAbsent) },
    { label: "غياب الزوج", value: String(DivorceAttendanceStatus.husabndAbsent) },
]
export enum DivorcePaperType {
    Machined,
    UnMachined,
    Other
}
export const DivorcePaperTypes = [
    { label: "مميكن", value: String(DivorcePaperType.Machined) },
    { label: "غير مميكن", value: String(DivorcePaperType.UnMachined) },
    { label: "اخري", value: String(DivorcePaperType.Other) },
]
export enum ApplicantType {
    Attorney = "0"
}
export const ApplicantTypeOptions = [
    { label: "وكيل", value: ApplicantType.Attorney }
];
export const CountriesOptions =
    ["مصر","السعوديه","المغرب","اليمن","عمان","الأردن"].map((x) => ({ label: x, value: x }));

export const shouldPreviousFianceesExist = (ss: SocialStatusCodes) => ss !== SocialStatusCodes.Virgin && !!ss;