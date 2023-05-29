// 是否 undefined or null or ''
export const getIsUndefinedNullEmptyString = (data) => {
  let isOk = false

  if (
    data === undefined
    || data === null
    || data === ''
  ) {
    isOk = true
  }

  return isOk
}
