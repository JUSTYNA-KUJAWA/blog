import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/categoriesRedux';




const PostForm = ({action, actionText, ...props}) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [title,setTitle] = useState(props.title || '');
  const [author,setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription,setShortDescription] = useState(props.shortDescription || '');
  const [content,setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');

  const categories = useSelector(state => getAllCategories(state));
  
  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return(
    <Form onSubmit={validate(handleSubmit)} >
    <Form.Group className="mb-3" controlId="formTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control {...register("title", { required: true, minLength: 3 })}
                    type="text" 
                    placeholder="Enter title" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}

      />
      {errors.title && <small className="d-block form-text text-danger mt-2">This field is required (min length is 3)</small>}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formAuthor">
      <Form.Label>Author</Form.Label>
      <Form.Control {...register("author", { required: true, minLength: 3 })}
                    type="text" 
                    placeholder="Enter author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}  
      />
      {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (min length is 3)</small>}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPublishedDate">
      <Form.Label>Published</Form.Label>
      <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} dateFormat="dd/MM/yyyy" />
            {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
    </Form.Group> 

    <Form.Group className="mb-3" controlId="formShordDescription">
      <Form.Label>Short description</Form.Label>
      <Form.Control {...register("shortDescription", { required: true, minLength: 20 })}
                    as="textarea" 
                    rows={6}
                    placeholder="Test"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}  
      />
      {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min length is 20)</small>}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formContent">
      <Form.Label>Main content</Form.Label>
      <ReactQuill theme="snow" placeholder="Enter content" value={content} onChange={setContent}  
      />
      {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" onChange={e => setCategory(e.target.value)}>
          {categories.map(category =>
            (<option key={category.id}
                className="d-flex align-items-stretch" value={category.name}>
                {category.name}
            </option>
            ))
          }
        </Form.Control>
      </Form.Group>

    <Button variant="primary" type="submit">{actionText}</Button>

    </Form>

  )
}

export default PostForm; 
