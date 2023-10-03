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
            <div className="card_zone">
                <h1 className="header_text">WHAT'S ON</h1>
                <Card />
            </div>
            <div className="services mb-4">
                <h1 className="header_text">Our services</h1>
                <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem fuga, tempore voluptatibus deleniti vitae ea officia beatae numquam facilis hic maiores? Error est vitae in rerum veniam voluptatibus deserunt.
                    Non iure voluptates possimus cumque totam modi consectetur recusandae molestiae, cupiditate corporis beatae hic, architecto dolorum provident error blanditiis fuga? A, et? Blanditiis, enim. Numquam tenetur sed laboriosam ipsum totam!</p>
                <div className="row mb-4 p-2">
                    <div className="col-4 service_list">
                        <img className="service_img mb-3" src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" />
                        <h1 className="header_text mb-4">Security</h1>
                    </div>
                    <div className="col-4 service_list">
                        <img className="service_img mb-3" src="https://images.unsplash.com/photo-1555255419-2b9ebb9d541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFN0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" />
                        <h1 className="header_text mb-4">Stage & Light</h1>
                    </div>
                    <div className="col-4 service_list">
                        <img className="service_img mb-3" src="https://images.unsplash.com/photo-1535078035266-a0fa7d3b8f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpcCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                        <h1 className="header_text mb-4">VIP Room</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
