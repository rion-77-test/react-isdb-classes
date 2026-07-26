function Event() {
   const handleClick = () => {
    console.log("Button Clicked")
  }
  return (
  <>
    <button className="button" onClick={handleClick}>Console log a msg</button>
  </>
  )
}

export default Event
