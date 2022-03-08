import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../Redux/postsRedux";
import dateToStr from '../../utils/dateToStr';


const SinglePost = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch( removePost (post.id))
  };



  if(!post) return <Navigate to="/"/>
  return (
    <div>
    <article >
      <Row className="d-flex justify-content-between">
        <Col >
          <h2>{post.title}</h2>
        </Col>
        <Col>
        <Link key={post.id} to={`/post/edit/${post.id}`}>
          <Button variant="outline-info" className="m-3 ">Edit</Button>
        </Link>
          <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
        </Col>
      </Row>
      <h3 className="mb-3">{post.author}</h3>
        <h4 className="mb-4">{dateToStr(post.publishedDate)}</h4>
        <p className="mb-4"><Link to={`/categories/${post.category}`}>{post.category}</Link></p>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove the post. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={function(e){ handleClose(); remove()}}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </article>
    </div>
  );
}

export default SinglePost;