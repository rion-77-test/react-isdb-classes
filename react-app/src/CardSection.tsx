import Card from "./Card.tsx";
function CardSection() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <Card
            imgSrc="https://picsum.photos/400/200"
            title="Let's Go Somewhere"
            text="Some quick example text to build on the card title and make up the bulk of the card’s content."
            btnType="btn-primary"
            btnText="Go somewhere"
          >
            <p>Things to obey in the trip</p>
            <ul>
            <li>Don't bring any money. beg for foods</li>
            <li>Wearing cheap cloths</li>
            <li>lookmaxxing is banned</li>
          </ul>
          <p>Lets enjoy primitiveness</p></Card>
        </div>
        <div className="col-md-4">
          <Card
            imgSrc="https://picsum.photos/401/200"
            title="Let's Go Home"
            text="Some quick example text to build on the card title and make up the bulk of the card’s content."
            btnType="btn-danger"
            btnText="Go Home"
          ><p>Country Road! Take me home, To the place. I belong west Cumilla.</p></Card>
        </div>
        <div className="col-md-4">
          <Card
            imgSrc="https://picsum.photos/402/200"
            title="I hate staying home for long"
            text="Some quick example text to build on the card title and make up the bulk of the card’s content."
            btnText="Let's go somewhere new"
          >
            <p>Fallback to primitiveness. Modernism is a trap.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
