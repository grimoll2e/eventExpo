import CardandDetail from "../components/CardandDetail";

const preview_about = [
    {
        img_big: 'https://images.unsplash.com/photo-1559581958-df379578606a?',
        img_sm: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?',
        title: 'History',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img_big: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?',
        img_sm: 'https://plus.unsplash.com/premium_photo-1674582744985-19097212179b?',
        title: 'Owner',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img_big: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?',
        img_sm: 'https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?',
        title: 'Test',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
]

export default function AboutPage() {
    return (
        <div className="container d-flex flex-column gap-5">
            <div className="my-5">
                <h1 className="header_text mb-5">About Us</h1>
                {preview_about.map((el, idx) => (
                <CardandDetail idx={idx} key={idx} bigImage={el.img_big} image={el.img_sm} title={el.title} description={el.description} />
            ))}
            </div>
        </div>
    )
}
