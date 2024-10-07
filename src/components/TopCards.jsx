
import { Card, CardBody, Container } from "reactstrap";

const TopCards = (props) => {
  return (
    <Container className="my-3">
        <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
    </Container>
  );
};

export default TopCards;