import CardandDetail from "../components/CardandDetail";

const card_test = [
    {
        img_big: 'https://images.unsplash.com/photo-1559581958-df379578606a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        img_sm: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'History'
    },
    {
        img_big: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        img_sm: 'https://plus.unsplash.com/premium_photo-1674582744985-19097212179b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'Owner'
    },
    {
        img_big: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        img_sm: 'https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        title: 'Test'
    },
]

export default function AboutPage() {
    return (
        <div className="container my-5 d-flex flex-column gap-5">
            <div className="my-5">
                <h1 className="header_text">About Us</h1>
            {card_test.map((el, idx) => (
                <CardandDetail el={el} idx={idx} key={idx} />
            ))}
            </div>
        </div>
    )
}
