import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../Redux/postsRedux";
import dateToStr from '../../utils/dateToStr';


const SinglePost = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch( removePost (postData.id))
  };



  if(!postData) return <Navigate to="/"/>
  return (
    <div>
    <article >
      <Row className="d-flex justify-content-between">
        <Col >
          <h2>{postData.title}</h2>
        </Col>
        <Col>
        <Link key={postData.id} to={`/post/edit/${postData.id}`}>
          <Button variant="outline-info" className="m-3 ">Edit</Button>
        </Link>
          <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
        </Col>
      </Row>
      <h3><span>Author: </span>{postData.author}</h3>
      <h4 className="mb-4">{dateToStr(postData.publishedDate)}</h4>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
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