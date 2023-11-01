import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ newsId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5333/news/${newsId}`)
      .then((res) => {
        // Assuming the API response contains a "comments" array
        if (res.data && res.data.comments) {
          setComments(res.data.comments);
        } else {
          setComments([]); // Set an empty array if no comments are found
        }
      })
      .catch((error) => {
        console.log("Error fetching comments", error);
      });
  }, [newsId]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Send the newComment data to your server here
    // Update the comments state with the new comment
    setComments([...comments, newComment]);
    // Clear the newComment form fields
    setNewComment({ name: "", email: "", comment: "" });
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id} className="p-3 my-2 rounded-md w-1/2">
          <h4 className="font-semibold">{comment.name}</h4>
          <p className="text-gray-600">{comment.comment}</p>
        </div>
      ))}
      <hr />
      <h3 className="text-xl font-semibold py-5">Skriv en kommentar</h3>
      <form onSubmit={handleSubmitComment}>
        <div className="flex justify-between w-1/2">
          <div className="mb-3 shadow-inner ">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newComment.name}
              onChange={handleCommentChange}
              className="p-2 border rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={newComment.email}
              onChange={handleCommentChange}
              className="p-2 border rounded-md focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-3 w-1/2">
          <textarea
            name="comment"
            placeholder="Write your comment here..."
            value={newComment.comment}
            onChange={handleCommentChange}
            className="p-2 border rounded-md focus:outline-none w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-safety-orange-blaze-orange text-white rounded-md hover:bg-safety-orange-dark-orange focus:outline-none"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
