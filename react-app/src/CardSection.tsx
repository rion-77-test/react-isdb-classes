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
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc="https://picsum.photos/401/200"
            title="Let's Go Home"
            text="Some quick example text to build on the card title and make up the bulk of the card’s content."
            btnType="btn-danger"
            btnText="Go Home"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc="https://picsum.photos/402/200"
            title="I hate staying home for long"
            text="Some quick example text to build on the card title and make up the bulk of the card’s content."
            btnType="btn-success"
            btnText="Let's go somewhere new"
          />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
