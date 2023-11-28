import ListItem from "../components/ListItem";
import HallForm from "../features/auth/HallForm";
import useVeanue from "../hooks/useVeanue";

export default function HallSetting() {

    const { allVeanue, handleDelete } = useVeanue()

    return (
        <>
            <HallForm />
            {
                allVeanue && allVeanue.map((el, idx) => (
                    <ListItem
                        name={el.hallName}
                        detail={el.detail}
                        src={el.image}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDelete}
                    >
                        <HallForm
                            name={el.hallName}
                            detail={el.detail}
                            hallid={el.id}
                            src={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}
