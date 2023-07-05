
const RemoveButton = ({}) => {

    const handleRemove = () => {
        onPlantRemove(plant)
    }
    return (
        <button className="btn btn-secondary" onClick={handleRemove}>Remove</button>
    )
}

export default RemoveButton;