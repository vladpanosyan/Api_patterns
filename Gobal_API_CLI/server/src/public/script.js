document.addEventListener('DOMContentLoaded', () => {
    console.log('WTH')

    function foo() {
        fetch('/bulldog/boston/', {method: "GET"})
        .then((res) => {
           return res.json()
        })
        .then(r => console.log(r))
    }

    const btn = document.querySelector('.btn')
    btn.addEventListener('click', foo)
    // fetch('/bulldog/boston/', {method: "GET"})
    // .then((res) => {
    //     res.json()
    // })
    // .then(res => console.log(typeof res))
})