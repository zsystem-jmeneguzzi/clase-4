import { Card, Image } from 'semantic-ui-react';

const CardUI = ({ img, name, date, about, action }) => {
  return (
    <div className="Cards ">
      <Card onClick={action}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
          <Card.Description>{about}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardUI;