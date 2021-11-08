

function Greetings(props) {
    const {userName} = props
    return <p className="h1">Olá, {userName}!</p>
}

export default Greetings;