
const emotion = "HAPPY"
function Face() {
    return <div>
     {(emotion === "HAPPY" ? <i className="fas fa-smile-beam fa-lg" style = {{fontSize:"60px", marginTop: "10px"}}></i> : <i className="fas fa-frown fa-lg" style = {{fontSize:"60px", marginTop: "10px"}}></i>)}
     </div>
}


export default Face