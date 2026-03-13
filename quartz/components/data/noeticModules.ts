export type NoeticModuleIcon = "oop" | "language" | "ybs" | "finance"

export interface NoeticModuleDefinition {
  id: string
  slugPattern: string
  title: string
  periodLabel: string
  periodOrder: number
  moduleUrl: string
  iconType: NoeticModuleIcon
}

export const NOETIC_MODULES: NoeticModuleDefinition[] = [
  {
    id: "oop",
    slugPattern: "nesne-tabanli-programlama|object-oriented-programming",
    title: "Nesne Tabanlı Programlama",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    moduleUrl: "static/oop1-module/index.html",
    iconType: "oop",
  },
  {
    id: "turk-dili",
    slugPattern: "turk-dili|türk-dili|turk-dili-1",
    title: "Türk Dili",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    moduleUrl: "static/logos-module/index.html",
    iconType: "language",
  },
  {
    id: "finance",
    slugPattern: "finansal-yonetim|finans|finance|finansal-yönetim",
    title: "Finansal Yönetim",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    moduleUrl: "static/finance-module/index.html",
    iconType: "finance",
  },
  {
    id: "turk-dili-2",
    slugPattern: "turk-dili-2|türk-dili-2|turk-dili-ii|türk-dili-ii",
    title: "Türk Dili II",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/turk-dili-2-module/index.html",
    iconType: "language",
  },
  {
    id: "data-mining",
    slugPattern: "veri-madenciligi|veri-madenciliği|data-mining",
    title: "Veri Madenciliği",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/data-mining-module/index.html",
    iconType: "ybs",
  },
  {
    id: "ybs",
    slugPattern:
      "yonetim-bilisim-sistemleri|1-2-bahar/ybs|/ybs/|/ybs$|management-information-systems",
    title: "Yönetim Bilişim Sistemleri",
    periodLabel: "1. Sınıf • Bahar",
    periodOrder: 0,
    moduleUrl: "static/ybs-module/index.html",
    iconType: "ybs",
  },
]
