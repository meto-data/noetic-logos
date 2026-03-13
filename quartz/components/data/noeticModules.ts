export type NoeticModuleIcon = "oop" | "language" | "ybs" | "finance"

export interface NoeticModuleDefinition {
  id: string
  slugPattern: string
  title: string
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
    subtitle: "OOP test ve pratik modülü",
    moduleUrl: "static/oop1-module/index.html",
    iconType: "oop",
  },
  {
    id: "turk-dili-2",
    slugPattern: "turk-dili-2|türk-dili-2|turk-dili-ii|türk-dili-ii",
    title: "Türk Dili II",
    subtitle: "Sınav odaklı çalışma modülü",
    moduleUrl: "static/turk-dili-2-module/index.html",
    iconType: "language",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "turk-dili",
    slugPattern: "turk-dili|türk-dili|turk-dili-1",
    title: "Türk Dili",
    subtitle: "Dil notları için çalışma modülü",
    moduleUrl: "static/logos-module/index.html",
    iconType: "language",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "ybs",
    slugPattern:
      "yonetim-bilisim-sistemleri|1-2-bahar/ybs|/ybs/|/ybs$|management-information-systems",
    title: "Yönetim Bilişim Sistemleri",
    subtitle: "YBS içerikleri için modül merkezi",
    moduleUrl: "static/ybs-module/index.html",
    iconType: "ybs",
  },
  {
    id: "finance",
    slugPattern: "finansal-yonetim|finans|finance|finansal-yönetim",
    title: "Finansal Yönetim",
    subtitle: "Finans sınav hazırlık modülü",
    moduleUrl: "static/finance-module/index.html",
    iconType: "finance",
    warningNote: "Yanlış cevap dönütleri sert olabilir ama faydalı.",
  },
  {
    id: "data-mining",
    slugPattern: "veri-madenciligi|veri-madenciliği|data-mining",
    title: "Veri Madenciliği",
    subtitle: "Kodlab ve testler tek yerde",
    moduleUrl: "static/data-mining-module/index.html",
    iconType: "ybs",
  },
]
