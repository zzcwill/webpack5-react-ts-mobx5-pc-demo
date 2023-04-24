export function getSession(key: string) {
  if (!key) {
    return ''
  }
  let value: string = sessionStorage.getItem(key) || ''
  if (!value) {
    return ''
  }
  try {
    value = JSON.parse(value)
  } catch (e) {
    console.error(e)
  }
  return value
}

export function setSession(key: string, value: any) {
  if (!key) {
    return false
  }
  if (typeof value !== 'string') {
    try {
      value = JSON.stringify(value)
    } catch (e) {
      console.error(e)
    }
  }
  sessionStorage.setItem(key, value)
  return true
}

export function removeSession(key: string) {
  if (!key) {
    return false
  }
  sessionStorage.removeItem(key)
  return true
}

export function getStorage(key: string): any {
  if (!key) {
    return ''
  }
  let value: string = localStorage.getItem(key) || ''
  if (!value) {
    return ''
  }
  try {
    value = JSON.parse(value)
  } catch (e) {
    console.warn(e)
  }
  return value
}

export function setStorage(key: string, value: any) {
  if (!key) {
    return false
  }
  try {
    value = JSON.stringify(value)
  } catch (e) {
    console.error(e)
  }
  localStorage.setItem(key, value)
  return true
}

export function removeStorage(key: string) {
  if (!key) {
    return false
  }
  localStorage.removeItem(key)
  return true
}
