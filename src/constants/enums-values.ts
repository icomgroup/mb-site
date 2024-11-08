import { State, StudyBranch, StudyYear, University } from "@/constants/enums";

export const StudyYearNames: { [key in StudyYear | string]: string } = {
  [StudyYear.UNKNOWN]: "أخرى",
  [StudyYear.FOURTH]: "رابعة",
  [StudyYear.FIFTH]: "خامسة",
  [StudyYear.SIXTH]: "سادسة",
};

export const StateNames: { [key in State | string]: string } = {
  [State.OUT_OF_SYR]: "خارج القطر",
  [State.ALEPPO]: "حلب",
  [State.DAMASCUS_COUNTRYSIDE]: "ريف دمشق",
  [State.DARAA]: "درعا",
  [State.HAMA]: "حماة",
  [State.QUNEITRA]: "قنيطرة",
  [State.LATAKIA]: "اللاذقية",
  [State.TARTUS]: "طرطوس",
  [State.EASTERN_GOVERNORATES]: "المحافظات الشرقية",
  [State.HOMS]: "حمص",
  [State.AS_Suwayda]: "السويداء",
  [State.OTHER]: "غير ذلك",
};

export const StudyBranchNames: { [key in StudyBranch | string]: string } = {
  [StudyBranch.PHARMACY]: "صيدلة",
  [StudyBranch.MEDICINE]: "طب بشري",
  [StudyBranch.DENTISTS]: "طب اسنان",
};

export const UniversityhNames: { [key in University | string]: string } = {
  [University.NOT_SYR]: "جامعة غير سورية",
  [University.DAMASCUS]: "دمشق",
  [University.TESHREEN]: "تشرين",
  [University.BAATH]: "البعث",
  [University.TARTOS]: "طرطوس",
  [University.ANDALOS]: "الأندلس",
  [University.FURAT]: "الفرات",
  [University.ALEPPO]: "حلب",
  [University.AL_SHAM]: "الشام",
  [University.AL_SORIA]: "السورية",
  [University.QALAMON]: "القلمون",
  [University.HAMA]: "حماة",
};
