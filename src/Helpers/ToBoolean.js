export const isObjEmpty = (obj) => {
  // if (!obj) throw new Error('Not an object')
  return Object.keys(obj).length === 0
}

export const isArrEmpty = (arr) => {
  // if (!arr) throw new Error('Not an array')
  return arr.length === 0
}
