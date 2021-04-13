import html from "./../util/innterHtml";

export default function Item(props) {

    return (
        <>
            <li>
                <div className="icon" style={{backgroundImage:`url(./assets/${props.season}/${props.month}-item-${props.index}.png`}}>
                    </div>
                <div dangerouslySetInnerHTML={html(props.bodyText)}>
                </div>
            </li>
        </>
    )
}