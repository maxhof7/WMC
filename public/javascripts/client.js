window.onload = () => {
    fetch('./todos')
        .then(response => response.json())
        .then(data => {
        let table = document.getElementById("myTable");
        const todos = data;
        for (let i = 0; i < todos.length; i++) {
            //todos.forEach(t => console.log(`${t.name} - ${t.description}`))
            table.innerHTML += `<tr>
                <td>${todos[i].name}</td>
                <td>${todos[i].description}</td>`;
        }
    });
};
export {};
