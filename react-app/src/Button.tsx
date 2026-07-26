import './Button.css'

function Button(props: any) {
    return (
        <button className="button" type={props.type}>{props.name}</button>
    )
}

export {Button}