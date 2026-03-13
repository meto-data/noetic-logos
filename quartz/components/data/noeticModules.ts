export type NoeticModuleIcon = "oop" | "language" | "ybs" | "finance"

export interface NoeticModuleDefinition {
  id: string
  slugPattern: string
  title: string
  periodLabel: string
  periodOrder: number
  subtitle: string
  moduleUrl: string
  iconType: NoeticModuleIcon
  warningNote?: string
}

export const NOETIC_MODULES: NoeticModuleDefinition[] = [
  {
    id: "oop",
    slugPattern: "nesne-tabanli-programlama|object-oriented-programming",
    title: "Nesne Tabanlı Programlama",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    subtitle: "OOP test ve pratik modülü",
    moduleUrl: "static/oop1-module/index.html",
    iconType: "oop",
  },
  {
    id: "turk-dili",
    slugPattern: "turk-dili|türk-dili|turk-dili-1",
    title: "Türk Dili",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    subtitle: "Dil notları için çalışma modülü",
    moduleUrl: "static/logos-module/index.html",
    iconType: "language",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "finance",
    slugPattern: "finansal-yonetim|finans|finance|finansal-yönetim",
    title: "Finansal Yönetim",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    subtitle: "Finans sınav hazırlık modülü",
    moduleUrl: "static/finance-module/index.html",
    iconType: "finance",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "turk-dili-2",
    slugPattern: "turk-dili-2|türk-dili-2|turk-dili-ii|türk-dili-ii",
    title: "Türk Dili II",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    subtitle: "Sınav odaklı çalışma modülü",
    moduleUrl: "static/turk-dili-2-module/index.html",
    iconType: "language",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "data-mining",
    slugPattern: "veri-madenciligi|veri-madenciliği|data-mining",
    title: "Veri Madenciliği",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    subtitle: "Kodlab ve testler tek yerde",
    moduleUrl: "static/data-mining-module/index.html",
    iconType: "ybs",
  },
  {
    id: "ybs",
    slugPattern:
      "yonetim-bilisim-sistemleri|1-2-bahar/ybs|/ybs/|/ybs$|management-information-systems",
    title: "Yönetim Bilişim Sistemleri",
    periodLabel: "Genel",
    periodOrder: 3,
    subtitle: "YBS içerikleri için modül merkezi",
    moduleUrl: "static/ybs-module/index.html",
    iconType: "ybs",
  },
]
