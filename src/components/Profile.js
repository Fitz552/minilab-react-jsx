import pfp from "../assets/images/puppy.jpg"


function Profile() {
    return <div className = "card col-6">
        <img src = {pfp} className="card-img-top" alt = "Cute Puppy"/>
        <div className = "card-body">
            <h5 className = "card-title">
                Cute Puppy
            </h5>
            <p className="card-text"> Ad aute ipsum reprehenderit consectetur voluptate excepteur amet amet nisi elit nisi do magna. Velit quis nisi mollit ea non do. Veniam ad sit mollit velit irure pariatur ea incididunt minim culpa ex. </p>
        </div>
    </div> 
}

export default Profile