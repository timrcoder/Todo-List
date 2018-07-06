let description = document.getElementById('description');
let output = document.getElementById('output');

function add() {
    output.innerHTML += '<input type="checkbox" />' + description.value + '<br />';

    // 1st click = <li>firstTodo</li>
    // 2nd click = <li>firstTodo</li> + <li>secondTodo</li>
    // 3rd click = <li>firstTodo</li> + <li>secondTodo</li> + <li>thirdTodo</li> + <li>secondTodo</li>

}
