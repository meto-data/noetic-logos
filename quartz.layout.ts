import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ScrollRestore(),
    Component.Hamburger(), // Mobil menü
    Component.ThemeCanvas(), // Tema efektleri (Balina)
    Component.MobileOnly(Component.ModuleBanner()), // Mobilde içerik sonunda banner
    Component.Toast(),
    Component.Enhancements(),
    // Component.Annotation(), // deaktif
    Component.MobileGestures(),
  ],
  footer: Component.Footer({
    links: {
      Instagram: "https://www.instagram.com/meto.data",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.AudioPlayer(),
    Component.DesktopOnly(Component.ModuleBanner()),
    Component.PrerequisiteBanner(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Arama + Modüller + Ayarlar
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.NoeticModules() },
        { Component: Component.Settings() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.AudioPlayer(),
    Component.DesktopOnly(Component.ModuleBanner()),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.NoeticModules() },
        { Component: Component.Settings() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
