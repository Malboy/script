// function getUserData() {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", "https://reqres.in/");
//     xhr.send();
// }


function getUserData(ID) {
    fetch("https://reqres.in/api/users?page=2")
        .then((resp) => {
            if (resp.ok) {
                try {
                    const base = resp.json();
                    return base.id === ID
                } catch (error) {
                    console.log(error);
                }
            }
        })
        .then(text => console.log(text));
}
getUserData(7);