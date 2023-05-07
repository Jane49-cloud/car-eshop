import React from "react";
import blogData from "../../TestData/BlogData";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5">
        {/*Section: Content */}
        <section>
          {/* Section heading  */}
          <h3 className="text-center font-weight-bold mb-5">
            Explore our Blogs
          </h3>

          {/* Grid row  */}
          <div className="row">
            {blogData.map((blog) => {
              return (
                /* Grid column  */
                <div key={blog.id} className="col-lg-4 col-md-12 mb-lg-0 mb-4 ">
                  {/* Card  */}
                  <div className="card hoverable">
                    {/* Card image  */}
                    <img
                      className="card-img-top"
                      src={blog.image}
                      alt="Card cap"
                    />

                    {/* Card content  */}
                    <div
                      className="card-body"
                      onClick={() => navigate(`/blog/${blog.id}`)}>
                      {/* Title  */}
                      <a href="#!" className="black-text ">
                        {blog.heading}
                      </a>
                      {/* Text  */}
                      <p className="card-text text-muted font-small mt-3 mb-2">
                        {blog.subtitle}
                      </p>

                      <p
                        onClick={() => navigate(`/blog/${blog.id}`)}
                        type="button"
                        className="btn-flat text-primary p-0 mx-0">
                        Read more <FaChevronRight />
                      </p>
                    </div>
                  </div>
                  {/* Card  */}
                </div>
                /* Grid column  */
              );
            })}
          </div>
          {/* Grid row  */}

          <div className="text-center mt-5">
            <a href="#!">Browse all blog posts</a>
          </div>
        </section>
        {/*Section: Content */}
        {/*  */}
      </div>
    </>
  );
};

export default Blogs;
