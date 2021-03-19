import React ,{useState} from 'react';
let showSex = true;
function Example2(){
    const [age,setAge] = useState(18)
    const [sex,setsex] = useState('男')
    const [work,setwork] = useState('前端程序员')
    return (
        <div>
            <p>{age}</p>
            <p>{sex}</p>
            <p>{work}</p>
        </div>
    )
}
export default Example2