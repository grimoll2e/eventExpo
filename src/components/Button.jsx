export default function Button({ text, type, onClick }) {
    return (
        <button className="btn btn-link text-decoration-none bg-light" type={type || 'button'} onClick={onClick}>{text}</button>
    )
}
