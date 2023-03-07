import { useState } from "react";
import { useHistory } from "react-router-dom";

function Form ({addBeerState}) {
    const [name, setName] = useState("")
    const [tagline, setTagLine] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [contributer, setContributer] = useState("")
    let history = useHistory()

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
            history.push("/beers")

    }
    return (
        <div className="row">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" for="name">Enter Name of Beer:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            id="name" 
                            name="name" 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="tagline">Enter Tagline:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="tagline" 
                            name="tagline"
                            onChange={e => setTagLine(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="image">Enter Image:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="image" 
                            name="image"
                            onChange={e => setImage(e.target.value)}
                        /> 
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="description">Enter Description of Beer:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="description" 
                            name="description" 
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="contributer">Enter Name of Contributer:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="contributer" 
                            name="contributer" 
                            onChange={e => setContributer(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary btn-customized mt-4">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Form;