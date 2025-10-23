// person: {
//     name: 'Lin Lanying',
//     imageId: '1bX5QH6'
//   },
//   size: 100
// });


export default function Avatar(person, size) {
    
    return (
        <div>
            <div>
                <h1>{person.name}</h1>
                <p>{person.imageID}</p>

                <div>{size}</div>
            </div>
        </div>
    );
}
