export const parseJSON = (res) => res.json()

export const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    const error = new Error(res.statusText)
    error.response = res
    throw error
  }
}
