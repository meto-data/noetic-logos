export type NoeticModuleIcon = "oop" | "language" | "ybs" | "finance" | "web" | "ethics"

export type UniversityCode = "deu" | "duzce"

export interface NoeticModuleDefinition {
  id: string
  slugPattern: string
  title: string
  periodLabel: string
  periodOrder: number
  moduleUrl: string
  iconType: NoeticModuleIcon
  subtitle?: string
  warningNote?: string
  university?: UniversityCode
  grade?: number
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
    university: "duzce",
    grade: 2,
    subtitle: "Java ile Nesne Tabanlı Programlama kavramları ve pratik testler.",
  },
  {
    id: "turk-dili",
    slugPattern: "turk-dili-1|türk-dili-1|/turk-dili$|/türk-dili$",
    title: "Türk Dili",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    moduleUrl: "static/logos-module/index.html",
    iconType: "language",
    university: "duzce",
    grade: 2,
    subtitle: "Türk Dili I dersi konu özetleri ve sınav hazırlık modülü.",
  },
  {
    id: "finance",
    slugPattern: "finansal-yonetim|finans|finance|finansal-yönetim",
    title: "Finansal Yönetim",
    periodLabel: "2. Sınıf • Güz",
    periodOrder: 1,
    moduleUrl: "static/finance-module/index.html",
    iconType: "finance",
    university: "duzce",
    grade: 2,
    subtitle: "Finansal tablolar, analiz ve sermaye yönetimi testleri.",
  },
  {
    id: "turk-dili-2",
    slugPattern: "turk-dili-2|türk-dili-2|turk-dili-ii|türk-dili-ii",
    title: "Türk Dili II",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/turk-dili-2-module/index.html",
    iconType: "language",
    university: "duzce",
    grade: 2,
    subtitle: "Türk Dili II dersi pekiştirme ve soru çözüm modülü.",
  },
  {
    id: "data-mining",
    slugPattern: "veri-madenciligi|veri-madenciliği|data-mining",
    title: "Veri Madenciliği",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/data-mining-module/index.html",
    iconType: "ybs",
    university: "duzce",
    grade: 2,
    subtitle: "Veri ön işleme, sınıflandırma, kümeleme ve analiz soruları.",
  },
  {
    id: "web",
    slugPattern: "web-tasarim|web-tasarım|web-programlama|web-programlama",
    title: "Web Tasarım ve Programlama",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/web-module/index.html",
    iconType: "web",
    university: "duzce",
    grade: 2,
    subtitle: "HTML, CSS, JS ve modern web geliştirme pratikleri.",
  },
  {
    id: "business-ethics",
    slugPattern: "is-etigi|is-etiği|business-ethics",
    title: "İş Etiği",
    subtitle: "Konu anlatımlarını pekiştirme ve sınava yönelik ders modülü.",
    periodLabel: "2. Sınıf • Bahar",
    periodOrder: 2,
    moduleUrl: "static/business-ethics-module/index.html",
    iconType: "ethics",
    university: "duzce",
    grade: 2,
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
    university: "duzce",
    grade: 1,
    subtitle: "YBS temel kavramları, sistem analizi ve bilişim testleri.",
  },
]
