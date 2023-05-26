class UrlWay {
  formatSearchString(searchString: string) {
    return Array.from(new URLSearchParams(searchString))
      .reduce((result, [key, value]) => {
        result[key] = value
        return result
      }, {
      })
  }
}

export const urlWay = new UrlWay()
