import { useContext } from "react"
import { MyContext } from "../App";

export const Home = (props) => {

    const context = useContext(MyContext);

    
    return (
        <div>
            <h1>Добро пожаловать в приложение</h1>
            <p>Данное приложение создано исключительно для моего изучения </p><h2>React</h2>
            
        </div>
    )
} 