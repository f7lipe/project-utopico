const generateTOC = (content: string) =>  {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headings = doc.querySelectorAll("h2")
    const toc = [] as string[]
    headings.forEach((heading) => {
        toc.push(String(heading.textContent))
    })
    return toc
    }
    
    export default generateTOC
