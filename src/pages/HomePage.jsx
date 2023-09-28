import Card from "../layouts/Card";
import Carousel from "../layouts/Carousel";

export default function HomePage() {

    const carousel = [
        {
            img: 'https://images.unsplash.com/photo-1695529741777-164f2f73236d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
            title: "test1",
            description: 'hello'

        },
        {
            img: 'https://images.unsplash.com/photo-1695477718933-a35f4921e903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
            title: "test2",
            description: 'hi_mom'
        },
        {
            img: 'https://images.unsplash.com/photo-1695667786839-2e3c60eaaceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            title: "test3",
            description: 'hi mom!!!'
        },
        {
            img: 'https://images.unsplash.com/photo-1695068546359-1ce69078361a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            title: "test4",
            description: 'Hai'
        },
    ]

    return (
        <div className="container">
        <Carousel carousel={carousel} />
            <div >
                <h1>WHAT'S ON</h1>
                <Card />
            </div>
        </div>
    )
}
