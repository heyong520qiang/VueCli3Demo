export default store => {
  console.log('store start')
  if (localStorage.appName) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
