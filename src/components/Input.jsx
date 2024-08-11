export default function Input({labels}) {
    return (
        labels.map(l => {
            return (
                <div>
                <label for={l.name}>{l.name}: </label>
                <input type={l.type} placeholder={l.placeholder}></input>
                </div>
            )
        })
    );
}