export default function VignetteProduit({ item, listID }) {

    return (
        <div className="bg-lime-50 w-96 m-4">
            <h3 className="text-2xl">{item.name}</h3>
            <p>Key: {listID}</p>
            <ul className="text-md">
                <li className="hover:bg-red-600">Category : {item.category}</li>
            </ul>
        </div>
    )
}