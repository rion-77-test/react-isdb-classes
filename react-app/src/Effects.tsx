import { useEffect, useState } from "react";

function Effect() {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    // const handleChange = (e: any) => {
    //     setName(e.target.value)
    //     console.log(name);
    // }

    useEffect(()=>{
        console.log("name changed");
    });
    
    // useEffect(()=>{
    //     console.log("age changed");
    // },[age]);
    
    return ( 
        <div>
            <h1>Effect</h1>
            <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="number" placeholder="Enter Your age" onChange={(e) => setAge(Number(e.target.value))} value={age}/>
        </div>
     );
}
function NewEffect() {
    return ( 
        <div>
            <h1>Effect 2</h1>
            <input type="text" placeholder="Enter Your Name" />
        </div>
     );
}
function NewEffect3() {
    return ( 
        <div>
            <h1>Effect 3</h1>
            <input type="text" placeholder="Enter Your Name" />
        </div>
     );
}

export default Effect;
export {NewEffect}
export {NewEffect3}