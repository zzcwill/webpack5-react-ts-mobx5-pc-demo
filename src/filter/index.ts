const noDataStr = '--';

export function strFilter(value: any) {
  if (value === undefined) {
    return noDataStr;
  }
  if (value === null) {
    return noDataStr;
  }
  if (value === '') {
    return noDataStr;
  }
  return value;
}
