export default function Header(props) {
    return (
        <header>
            <img className="logo" src="./assets/logo.png" alt="Yates" />
            <img src="./assets/header.png" alt="Lawn Care Guide" />
            <img className="season" src={`./assets/${props.season}/season.png`} alt={props.season} />

        </header>
    )
}