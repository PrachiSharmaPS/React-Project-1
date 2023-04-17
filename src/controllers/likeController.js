const postModel = require('../models/postModel');

// like a post
let likePost = function(req, res){
  const postId = req.params.postId;
  const userId = req.body.userId; // current user who is liking
  Post.findByIdAndUpdate(
    postId,
    { $addToSet: { likes: userId } },
    { new: true },
    (err, post) => {
      if (err || !post) {
        return res.status(404).send({ error: 'Post not found' });
      }
      res.status(200).send(post);
    }
  );
};

// unlike a post
let unlikePost =function(req, res){
  const postId = req.params.postId;
  const userId = req.body.userId; // current user who is unliking
  Post.findByIdAndUpdate(
    postId,
    { $pull: { likes: userId } },
    { new: true },
    (err, post) => {
      if (err || !post) {
        return res.status(404).send({ error: 'Post not found' });
      }
      res.status(200).send(post);
    }
  );
};

module.exports={likePost,unlikePost}
