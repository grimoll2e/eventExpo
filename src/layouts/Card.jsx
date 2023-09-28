import CardItem from "../components/CardItem";

const cardlist = [
    {
        img: 'https://images.unsplash.com/photo-1695339260211-89ef73795ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: '01',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://images.unsplash.com/photo-1695456527397-0b9e1c79fe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        title: '02',
        description: 'consectetur adipisicing elit.'
    },
    {
        img: 'https://images.unsplash.com/photo-1695516516189-47a458340676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        title: '03',
        description: 'Porro pariatur doloribus accusamus ducimus eveniet ipsam,'
    },
    {
        img: 'https://images.unsplash.com/photo-1695455061112-87e2cee1647c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        title: '04',
        description: 'suscipit enim dicta molestiae explicabo similique neque tenetur fuga exercitationem magni ad.'
    },
    {
        img: 'https://images.unsplash.com/photo-1679290612023-09c0eb8f3665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        title: '05',
        description: 'Velit, aperiam quidem?'
    },
    {
        img: 'https://images.unsplash.com/photo-1694714567169-bcdb197f5ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        title: '06',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptate temporibus? Fugiat dolorum molestiae numquam officiis eius qui quis asperiores, unde repellendus perspiciatis autem ipsam quae maxime pariatur ratione! Voluptates.'
    },
]

export default function Card() {
    return (
        <div className="row p-5">
            {cardlist.map((el, idx) => (
                <CardItem el={el} idx={idx} key={idx} />
            ))}
        </div>
    )
}
