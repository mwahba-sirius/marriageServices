import { Religions } from "../constants";
import { IPerson } from "../models/person";

export const createPerson = (person: Partial<IPerson>): IPerson => ({
    name : person.name ?? "",
    placeOfBirth :person.placeOfBirth ?? "",
    fatherName :person.fatherName ?? "",
    grandFatherName :person.grandFatherName ?? "",
    motherName :person.motherName ?? "",
    religion :person.religion ?? Religions.muslim,
    nationality :person.nationality ?? "",
    job :person.job ?? "",
    jobPlace :person.jobPlace ?? "",
    authorizationCredType :person.authorizationCredType ?? "",
    authorizationNumber :person.authorizationNumber ?? "",
    issuingCountry :person.issuingCountry ?? "",
    issuingDate :person.issuingDate ?? "",
    town :person.town ?? "",
    city :person.city ?? "",
    dob : person.dob ?? new Date(),
    address :person.address ?? "",
    adTargetAddress :person.adTargetAddress ?? "",
    letter :person.letter ?? "",
    printedNumber :person.printedNumber ?? "",
    wifeNickName :person.wifeNickName ?? "",
    email :person.email ?? "",
    phoneNumber :person.phoneNumber ?? "",
    gender :person.gender ?? "",
    socialStatus:person.socialStatus ?? "",
    attachment: person.attachment ?? "",
    notes :person.notes ?? "",
    marriedBefore :person.marriedBefore ?? false,
})

export interface IStepRef {
    onNext : (func : (data : any) => void) => Promise<boolean>;
}