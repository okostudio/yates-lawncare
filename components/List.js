import Item from "./Item";

export default function List(props) {
    const items = props.items.map(v=>({bodyText:v}))
    .map((v,i)=><Item {...v} index={i+1} key={i} season={props.season} month={props.month} />);

    return <ul>{items}</ul>;

    // [
    //     {
    //     bodyText: "<p><strong>Rake</strong><br>Lower the mower and get out the rake, it's time to remove old growth.</p>"
    //     },
    //     {
    //     bodyText: "<p><strong>Water Deeply</strong><br>Fertilise and water deeply to promote fast recovery.</p>"
    //     },
    //     {
    //     bodyText: "<p><strong>Fertilise</strong><br>Try Yates<sup>&reg;</sup> Dynamic Lifter<sup>&copy;</sup> Concentrated Lawn Food to improve your soil and encourage new growth.</p>"
    //     },
    // ]    
}