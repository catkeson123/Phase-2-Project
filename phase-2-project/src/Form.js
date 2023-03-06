import { useState } from "react";

function Form ({addBeerState}) {
    const [name, setName] = useState("")
    const [tagline, setTagLine] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [contributer, setContributer] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        let newBeerObj = {
            name: name,
            tagline: tagline,
            image_url: image,
            description: description,
            contributer: contributer,
        }
        fetch("http://localhost:6001/beers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBeerObj)
        })
            .then(r => r.json())
            .then(addBeerState)
            e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">Enter Name of Beer:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={e => setName(e.target.value)}
                />
                <label for="tagline">Enter Tagline:</label>
                <input 
                    type="text" 
                    id="tagline" 
                    name="tagline"
                    onChange={e => setTagLine(e.target.value)}
                />
                <label for="image">Enter Image:</label>
                <input 
                    type="text" 
                    id="image" 
                    name="image"
                    onChange={e => setImage(e.target.value)}
                />
                <label for="description">Enter Description of Beer:</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    onChange={e => setDescription(e.target.value)}
                />
                <label for="contributer">Enter Name of Contributer:</label>
                <input 
                    type="text" 
                    id="contributer" 
                    name="contributer" 
                    onChange={e => setContributer(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;