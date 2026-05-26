const { VITE_API_URL } = import.meta.env

function useTask() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))
    }, [])

    function addTask() { }
    function removeTask() { }
    function updateTask() { }

    return { tasks, addTask, removeTask, updateTask }

}

export default useTask