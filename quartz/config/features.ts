/**
 * Feature Toggle Configuration
 *
 * Tüm yeni özellikler için merkezi açma/kapama sistemi.
 * Bir özellik kapalıysa (false), ilgili script/style/HTML tamamen devre dışı kalır.
 */

export interface FeatureConfig {
  // ============================================================================
  // FAZ 1: Core Features (Varsayılan: Açık)
  // ============================================================================

  /**
   * Scroll pozisyonu geri yükleme
   * - [[]] inline linklerden geri dönüşte scroll pozisyonunu hatırlar
   * - sessionStorage kullanır
   * - Mobil uyumlu
   */
  scrollPositionRestore: boolean

  /**
   * Ön koşul sistemi
   * - Frontmatter'da prerequisites tanımlanır
   * - Eksik ön koşullarda uyarı banner'ı gösterir
   * - localStorage'da tamamlanan dersler takip edilir
   */
  prerequisiteSystem: boolean

  /**
   * İlerleme takibi
   * - Test/quiz tamamlanma oranları
   * - Dashboard ile görselleştirme
   * - localStorage tabanlı
   */
  progressTracking: boolean

  /**
   * Modül template generator
   * - CLI tool ile yeni test modülü oluşturma
   * - Otomatik dosya scaffolding
   */
  moduleGenerator: boolean

  /**
   * Modül analitiği
   * - Soru bazlı istatistikler (zorluk, süre, hata oranı)
   * - Performans trendi
   * - localStorage tabanlı
   */
  moduleAnalytics: boolean

  // ============================================================================
  // FAZ 2: Advanced Features (Varsayılan: Kapalı, Onay Gerekli)
  // ============================================================================

  /**
   * Okuma ilerleme barı
   * - Sayfa scroll göstergesi
   * - Üst veya alt bar
   * - Mobil uyumlu
   */
  readingProgressBar: boolean

  /**
   * Gamification sistemi
   * - Rozetler, streak, XP, level
   * - Daily goals
   * - localStorage tabanlı
   */
  gamification: boolean

  /**
   * Spaced repetition
   * - SM-2 algoritması
   * - Otomatik tekrar planlaması
   * - localStorage tabanlı
   */
  spacedRepetition: boolean

  /**
   * Sayfa bazlı chat
   * - WebRTC P2P veya signaling server
   * - Her sayfa için ayrı chat room
   * - Rastgele anonim nickler
   * - Mobil uyumlu
   */
  pageBasedChat: boolean
}

/**
 * Varsayılan feature konfigürasyonu
 *
 * Faz 1 özellikleri: Açık (true)
 * Faz 2 özellikleri: Kapalı (false) - Kullanıcı onayı ile açılacak
 */
export const defaultFeatures: FeatureConfig = {
  // Faz 1: Core Features
  scrollPositionRestore: true,
  prerequisiteSystem: true,
  progressTracking: false,
  moduleGenerator: true,
  moduleAnalytics: true,

  // Faz 2: Advanced Features (varsayılan kapalı)
  readingProgressBar: false,
  gamification: false,
  spacedRepetition: false,
  pageBasedChat: false,
}

/**
 * Feature'ın aktif olup olmadığını kontrol et
 * Runtime'da kullanılmak üzere
 */
export function isFeatureEnabled(featureName: keyof FeatureConfig, config: FeatureConfig): boolean {
  return config[featureName] === true
}

/**
 * Browser-side feature flag access
 * Build zamanında window.__FEATURE_FLAGS__ global değişkenine inject edilecek
 */
export interface RuntimeFeatureFlags {
  __FEATURE_FLAGS__?: FeatureConfig
}

declare global {
  interface Window extends RuntimeFeatureFlags {}
}
