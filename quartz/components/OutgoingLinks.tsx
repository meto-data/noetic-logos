import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import OverflowListFactory from "./OverflowList"

interface OutgoingLinksOptions {
  hideWhenEmpty: boolean
}

const defaultOptions: OutgoingLinksOptions = {
  hideWhenEmpty: true,
}

export default ((opts?: Partial<OutgoingLinksOptions>) => {
  const options: OutgoingLinksOptions = { ...defaultOptions, ...opts }
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory()

  const OutgoingLinks: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const outgoingSlugs = fileData.links ?? []
    const linkedFiles = allFiles.filter((file) =>
      outgoingSlugs.includes(simplifySlug(file.slug!)),
    )

    if (options.hideWhenEmpty && linkedFiles.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "backlinks outgoing-links")}>
        <h3>Linkler</h3>
        <OverflowList>
          {linkedFiles.length > 0 ? (
            linkedFiles.map((f) => (
              <li>
                <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                  {f.frontmatter?.title}
                </a>
              </li>
            ))
          ) : (
            <li>Link bulunamadı</li>
          )}
        </OverflowList>
      </div>
    )
  }

  OutgoingLinks.css = style
  OutgoingLinks.afterDOMLoaded = overflowListAfterDOMLoaded

  return OutgoingLinks
}) satisfies QuartzComponentConstructor
