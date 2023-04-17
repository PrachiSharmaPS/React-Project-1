
const postModel = require('../models/postModel');

// Create a new post
let createPost = async function(req, res)  {
  try {
    const {title,description} = req.body;
   if(!title){
    res.status(400).send({error:"Title is missing"})
   }
   if(!description){
    res.status(400).send({error:"Description is missing"})
   }
    const userId=req.userID
    const postData={
      title:title,
      description:description,
      authorId:userId
    }
    const savedPost = await postModel.create({postData},{title:1,description:1,createdAt:1 }) 
    res.status(201).send(savedPost);
  } catch (err) {
    res.status(500).send({ error: 'Failed to create post' });
  }
};

// Get all posts
let getAllPosts = async function(req, res){
  try {
    const posts = await postModel.find({authorId:userId}).populate('Comment');
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ error: 'Failed to get posts' });
  }
};

// Get a single post by ID
let getPostById = async function(req, res) {
  try {
    const userId=req.params.userID
    const post = await postModel.findOne(userId).populate('Comments');
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ error: 'Failed to get post' });
  }
};

// Delete a post by ID
let deletePostById = async function(req, res)  {
  try {
    const postId=req.params.id;

    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    if(post.authorId!=req.userId){
      return res.status(400).send({ error: 'you are not authorised to delete the post' });
    }
   // postModel.deleteOne({ _id: ObjectId("document_id") })
    postModel.deleteOne({ _id:postId})
    res.status(204).send({msg:"data deleted successful"});
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete post' });
  }
};

module.exports = { createPost,getAllPosts,getPostById, deletePostById };