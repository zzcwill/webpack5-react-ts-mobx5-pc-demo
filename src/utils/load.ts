export function loadJS(url: string, async = false): Promise<any> {
  if (Array.from(document.querySelectorAll('script')).some(dom => dom.src === url)) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.async = async
    script.onload = resolve
    script.onerror = reject
    document.getElementsByTagName('head')[0].appendChild(script)
  })
}

/**
 * 加载css
 * @param url
 * @returns {Promise<any>}
 */
export function loadCSS(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.onload = resolve
    link.onerror = reject
    document.getElementsByTagName('head')[0].appendChild(link)
  })
}
