import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "Все cотрудники"},
        {name: "promotion", label: "Сотрудники на повышение"},
        {name: "moreThen1000", label: "Зарплата больше 1000$"}

    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn btn-outline-light'
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={()=> props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}


        </div>
    )
}

export default AppFilter;
