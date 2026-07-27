function Card({ imgSrc, title, text, btnType = "btn-warning", btnText, children }: any) {
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{text}</p> */}
          {children}
          <a href="#" className={`btn ${btnType}`}>
            {btnText}
          </a>
        </div>
      </div>
    </>
  );
}

// function Card(props: any) {
//   return (
//     <>
//       <div className="card" style={{ width: "18rem;" }}>
//         <img src={props.imgSrc} className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">
//             {props.text}
//           </p>
//           <a href="#" className={`btn ${props.btnType}`}>
//            {props.btnText}
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

export default Card;
