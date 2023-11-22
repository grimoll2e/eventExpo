import CardItem from "./CardItem";

export default function Card({ value }) {
    return (
        <div className="row">
            {value ? value.slice(0, 6).map((el, idx) => (
                <CardItem el={el} idx={idx} key={idx} />
            )) : <></>}
        </div>
    )
}
