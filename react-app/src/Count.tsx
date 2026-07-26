import { useState } from "react";

function Count() {
  const [num, setNum] = useState(0);

  //   let num = 10;

  const handleIncement = () => {
    console.log(num);
    setNum(num + 1);
  };
  const handleDecrement = () => {
    console.log(num);
    setNum(num - 1);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Count: {num}</h1>
        {/* <button className="button" onClick={handleIncement}>
        +
      </button>
      <button className="button" onClick={handleDecrement}>
        -
      </button> */}
        <button className="button" onClick={() => setNum(num + 1)}>
          +
        </button>
        <button className="button" onClick={() => setNum(num - 1)}>
          -
        </button>
      </div>
    </>
  );
}

export default Count;
