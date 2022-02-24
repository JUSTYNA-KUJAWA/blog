import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../Redux/postsRedux";
import PostForm from "./PostForm";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = postAdd => {
    dispatch(addPost(postAdd))
    navigate("/");
  }
  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  );
}

export default AddPostForm;