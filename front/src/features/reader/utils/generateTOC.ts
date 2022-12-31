 const generateTOC =  (
    content: string,
    selector: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headings = doc.querySelectorAll(selector)
    const toc = [] as string[]
    headings.forEach((heading) => {
        heading.textContent && toc.push(heading.textContent)
    })
    return toc
}

export default generateTOC
