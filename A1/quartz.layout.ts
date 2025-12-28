import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [
        Component.ScrollRestore(),
        Component.Chat(),
        Component.Hamburger(), // Mobil menü
        Component.ThemeCanvas(), // Tema efektleri (Balina)
    ],
    footer: Component.Footer({
        links: {
            Instagram: "https://www.instagram.com/metophysica",
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.TestNotification(),
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.PrerequisiteBanner(),
        Component.ContentMeta(),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        // Arama + Darkmode + Settings
        Component.Flex({
            components: [
                { Component: Component.Search(), grow: true },
                { Component: Component.Settings() },
                { Component: Component.Darkmode() },
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
    beforeBody: [Component.TestNotification(), Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                { Component: Component.Search(), grow: true },
                { Component: Component.Settings() },
                { Component: Component.Darkmode() },
            ],
        }),
        Component.Explorer(),
    ],
    right: [],
}
