document.addEventListener('DOMContentLoaded', () => {
    function foo() {
        fetch('/bulldog/boston/', {method: "GET"})
        .then((res) => {
           return res.json()
        })
        .then(r => console.log(r))
    }

    const btn = document.querySelector('.btn')
    btn.addEventListener('click', foo)
})