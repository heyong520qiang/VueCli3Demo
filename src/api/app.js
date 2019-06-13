
export const getappname = () => {
  return new Promise((resolve, reject) => {
    const err = null
    if (!err) resolve({ code: 200, info: { appName: 'apiName' } })
    else reject(err)
  })
}
