import { useSelector } from 'react-redux'
import { getAllCategories } from '../../Redux/categoriesRedux'
import { Link } from 'react-router-dom'


const Categories = () => {

  const categories = useSelector(state => getAllCategories(state));

  return (
    <section className="container mt-2 d-flex justify-content-center">
    <div className="col-8">
      <h3>All Categories</h3>
        {
          categories.map(category => (
            <Link className="mt-auto list-group-item list-group-flush" to={`/categories/${category.name}`}>{category.name}</Link>
          ))
        }
    </div>
    </section>
  )
}

export default Categories;