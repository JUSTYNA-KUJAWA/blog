import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById} from "../../Redux/postsRedux";
import PostForm from "./PostForm";


const EditPostForm = () => {
  const {id} = useParams();
  const postData =  useSelector(state => getPostById(state,id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = postEdit => {
    dispatch(editPost({...postEdit, id}));
    navigate("/");
  }

  return (
    <PostForm action={handleSubmit} actionText="Edit post" title={postData.title} author={postData.author} content={postData.content} publishedDate={postData.publishedDate} shortDescription={postData.shortDescription}/>
  );
}

export default EditPostForm