import type { Exercise } from "@/types/workout";
import SetRow from "@/components/SetRow";
import AddSetForm from "./AddSetForm";

type ExerciseBlockProps = {
    exercise : Exercise;
};

export default function ExerciseBlock( { exercise }: ExerciseBlockProps) {
    return (
        <article>
            <h2>{exercise.name}</h2>
            {exercise.machine && (
                <p>
                    {exercise.machine.name} · poulie ×{exercise.machine.pulleyFactor}
                </p>
            )}

            <ol>
                {exercise.sets.map((set,index)=> (
                    <SetRow 
                        key={set.id}
                        index={index}
                        set={set}
                        machine={exercise.machine}
                    />
                ))}
            </ol>

            <AddSetForm />
        </article>
    )
}