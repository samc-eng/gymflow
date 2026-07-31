type WorkoutFeelingProps = {
    energy : number;
    sleep : number;
};

export default function WorkoutFeeling({ energy, sleep}: WorkoutFeelingProps) {
    return (
        <section>
            <p>Energie : {energy} </p>
            <p>Sommeil : {sleep} </p>
        </section>
    )
}