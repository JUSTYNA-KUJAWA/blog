import { Row, Col, } from 'react-bootstrap'
import { useParams} from 'react-router';
import { useSelector } from 'react-redux';
import { getFilteredPosts } from '../../Redux/postsRedux';
import PostCard from '../views/PostCard';


const CategoryView = () => {

  const { categoryName } = useParams();

  const posts = useSelector(state => getFilteredPosts(state, categoryName));
  
  if(posts.length === 0)
    return (
      <div className="container mt-2">
        <h3 className="row mt-5">Category: {categoryName}</h3>
        <p className="row mt-3">No posts in this category ...</p>
        </div>
    );

  return (
    <section>
      <div className="container mt-2 ">
      <h3>Category: {categoryName}</h3>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
      {
        posts.map(post => (
          <Col key={post.id} className="col-3 d-flex align-items-stretch">
            <PostCard id={post.id}/>
          </Col>
        ))
      }
      </Row>
      
      </section>
  );
}

export default CategoryView;