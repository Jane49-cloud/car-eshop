import React, { useState, useEffect } from "react";
import blogData from "../../TestData/BlogData";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";

const Blog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(blogData);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogs.filter((blog) => blog.id === parseInt(id))[0];
    setBlog(selectedBlog);
  }, [id, blogs]);

  console.log(id);
  console.log(blogs);
  console.log(blog);

  return (
    <div>
      {blog ? (
        <div className="container mt-5">
          {/*Section: Content */}
          <section className="mx-md-5 dark-grey-text">
            {/* <!-- Grid row  */}
            <div className="row">
              {/* Grid column  */}
              <div className="col-md-12">
                {/* Card  */}
                <div className="card card-cascade wider reverse">
                  {/* Card image  */}
                  <div className="view view-cascade overlay">
                    <img
                      className="card-img-top blog-image"
                      src={blog.image}
                      alt="Sample image"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  {/* Card content  */}
                  <div className="card-body card-body-cascade text-center">
                    {/* Title  */}
                    <h3 className="font-weight-bold">{blog.heading}</h3>
                    {/* Data  */}
                    <p>
                      Written by{" "}
                      <a>
                        <strong>Jane Doe </strong>
                      </a>
                      , 2023
                    </p>
                    {/* Social shares  */}
                    <div className="social-counters">
                      {/* Comments  */}
                      <a className=" btn-default">
                        <i className="far fa-comments pr-2"></i>
                        <span className="clearfix d-none d-md-inline-block">
                          Comments
                        </span>
                      </a>
                      <span className="counter">{blog.comments}</span>
                      <a className=" btn-default">
                        <i className="far fa-comments pr-2"></i>
                        <span className="clearfix d-none d-md-inline-block">
                          likes
                        </span>
                      </a>
                      <span className="counter">{blog.likes}</span>
                    </div>
                    {/* Social shares  */}
                  </div>
                  {/* Card content  */}
                </div>
                {/* Card  */}

                {/* Excerpt  */}
                <div className="mt-5">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa nemo enim
                    ipsam voluptatem quia voluptas sit qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga quidem rerum
                    facilis est distinctio.
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae itaque earum rerum.
                  </p>
                </div>
              </div>
              {/* Grid column  */}
            </div>
            {/* Grid row  */}

            <hr className="mb-5 mt-4" />
          </section>
          {/*Section: Content */}
        </div>
      ) : (
        <div className="container">Loading ...</div>
      )}
    </div>
  );
};

export default Blog;
