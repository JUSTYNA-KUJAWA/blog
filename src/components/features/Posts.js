import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../Redux/postsRedux";
import { Button,Col, Row } from "react-bootstrap";
import PostCard from '../views/PostCard';


const Posts = () => {
  const posts = useSelector(state => getAllPosts(state)) ;

  return (
    <section  className="container ml-2">
      <div className="ml-2 d-flex justify-content-between">
        <h2>All posts</h2>
        <Link className="mt-2" to={"/post/add"}>
        <Button variant="outline-primary">Add post</Button>
        </Link>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
      {
      posts.map(post => (
        <Col key={post.id} className="d-flex align-items-stretch">
          <PostCard id={post.id}/>
        </Col>
      ))
    }
  </Row>
</section>
);
}

export default Posts;