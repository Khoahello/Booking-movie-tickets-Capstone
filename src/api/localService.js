export let userLocalStorage = {
    get: () => {
        let dataJason = localStorage.getItem("USER")
        return JSON.parse(dataJason)
    },
    set: (user) => {
        let dataJson = JSON.stringify(user)
        localStorage.setItem("USER", dataJson)
    },
    remove: () => {
        localStorage.removeItem("USER")
    },
}