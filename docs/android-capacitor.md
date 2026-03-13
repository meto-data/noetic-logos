# Android APK

Bu proje `Capacitor` ile Android uygulamasi olarak paketlenebilir.

## Mantik

- Uygulama, canli siteyi (`https://noetic-logos.pages.dev`) WebView icinde acar.
- Notlar sitede guncellendikce uygulama da yeni icerigi alir.
- Her not guncellemesinde yeni APK üretmek gerekmez.

## Ilk kurulum

```bash
npm install
npx cap add android
```

## Android projeyi senkronize et

```bash
npm run android:sync
```

## Android Studio ile ac

```bash
npm run android:open
```

## Debug APK üret

```bash
npm run android:apk:debug
```

Olusan dosya:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Notlar

- APK build icin Android SDK ve Java 21+ gerekli.
- `local.properties` ve Gradle cache dosyalari git'e dahil edilmez.
- Release APK/AAB icin ayri signing ayari gerekir.
- Bu makinede lokal SDK kurulumu `.android-sdk/` altina alindi; script debug APK build ederken bunu otomatik kullanir.
- Bu makinede Java 25 bulundu ve debug script onu otomatik tercih eder.
