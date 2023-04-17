const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

// create a new comment on a post
let createComment = async function (req, res) {
  const postId = req.params.postId;
  const { text } = req.body;
  const userId = req.user._id;

  try {
    // find the post to add the comment to
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }

    // create a new comment
    const comment = new Comment({
      text,
      author: userId,
      post: postId,
    });

    // save the comment and add it to the post
    await comment.save();
    post.comments.push(comment._id);
    await post.save();

    res.status(201).send(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = { createComment };
