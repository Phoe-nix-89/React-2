import { useState } from 'react';
import './Card.css';
import One from './One';
import Two from './Two';
import Btn1 from './Btn1';
import Btn2 from './Btn2';
import Bottom1 from './Bottom1';
import Bottom2 from './Bottom2';

function Card() {
    const [v,setV] = useState(<One />);
    const [f,setF] = useState(true);
    const [b,setB] = useState(true);
    const [bot,setbot] = useState(true);
    return (
        <div className="signin">
            <h1 className='Insta'>Instagram</h1>
            {/* {v} */}
            {(f) ? <One /> : <Two />}
            {(b) ? <Btn1 set1={setF} set2={setB} setbot={setbot} /> : <Btn2 />}
            {(bot) ? <Bottom1 /> : <Bottom2 />}
        </div>
    );
}

export default Card;