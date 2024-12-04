import './Dwitter.css';
import Dwitter from "./Dwitter";
import { useEffect, useState } from 'react';


export default function AppDwitter() {
    const [dwitters, setDwitters] = useState([]);
    
    
    // react network 접속 진행 시 => useEffect() 리액트 Hooks 사용!!!
    // react hooks -- useEffect();
    // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수, 비동기식 처리 실행하는 함수
    useEffect(() => {   // 맨처음 한번만 호출하도록 상태 관리
        fetch("/data/dwitters.json") // 네트워크를 통해 접속
        .then((result) => result.json())
        .then((jsonData) => setDwitters(jsonData))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Signup</li>
            </ul>
            {/* Dwitter map을 통해 출력 */}
            {/* <Dwitter
                img="/images/people1.webp"
                name="Smith Kim"
                id="@smith"
                date="2024.10.01"
                content="겨울입니다. 감기조심 하세요" />
            <Dwitter
                img="/images/people2.webp"
                name="James Lee"
                id="@james"
                date="2024.11.01"
                content="크리스마스~" />
            <Dwitter
                img="/images/people3.webp"
                name="Kelly Kim"
                id="@kelly"
                date="2024.09.12"
                content="겨울입니다. 감기조심 하세요" /> */}

            {dwitters.map((dwitter) =>
                <Dwitter
                    img={dwitter.img}
                    id={dwitter.id}
                    name={dwitter.name}
                    date={dwitter.date}
                    content={dwitter.content}
                />
            )}
        </div>
    );
}