import pfp from "../assets/images/puppy.jpg"


function Profile() {
    return <div class = "card col-6">
        <img src = {pfp} class="card-img-top" alt = "Cute Puppy"/>
        <div class = "card-body">
            <h5 class = "card-title">
                Cute Puppy
            </h5>
            <p class="card-text"> Ad aute ipsum reprehenderit consectetur voluptate excepteur amet amet nisi elit nisi do magna. Velit quis nisi mollit ea non do. Veniam ad sit mollit velit irure pariatur ea incididunt minim culpa ex. </p>
        </div>
    </div> 
}

export default Profile