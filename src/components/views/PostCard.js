import { Card, Button,Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPostById } from '../../Redux/postsRedux';
import { Link } from 'react-router-dom';
import dateToStr from '../../utils/dateToStr';

const PostCard = ({ id }) => {

    const post = useSelector(state => getPostById(state, id));
    
    return ( 
      <div className="container d-flex justify-content-center">
      <Card className=" col-12 mt-2 pl-3">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-3">{post.title}</Card.Title>
          <Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>
          <Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{dateToStr(post.publishedDate)}</Card.Subtitle>
          <Card.Subtitle className="mt-2"><span className="fw-bold">Category: </span><Link to={`/categories/${post.category}`}>{post.category}</Link></Card.Subtitle>
          <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
          <Link className="mt-auto" to={`/post/${post.id}`}>
            <Button variant="primary">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
      
    )
  }
  
  export default PostCard;