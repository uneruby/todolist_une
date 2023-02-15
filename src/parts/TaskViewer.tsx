import React from "react";
import { Alltasks } from "./Alltasks";

export const TaskVeiwer:React.FC = () => {
    const onClickViewAlltask = () =>{
        return(
            <div>
                <Alltasks/>
            </div>
        )
    }
    return(
        <div>
            <button onClick={onClickViewAlltask}>全タスク</button>
        </div>
    )
}