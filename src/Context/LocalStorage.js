

function LocalStorage(title, description,date,label,id) {

    /*
    const [title, setTitle ] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [label, setLabel] = useState("")
    */
    let task = {
        title,
        description,
        date,
        label,
        id
    }
    console.log(task)
    if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log(task[0]);;
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    

}

export default LocalStorage