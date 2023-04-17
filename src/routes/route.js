const express=require("express")
const router=express.Router()

const {signup,login,getUser}=require("../controllers/userController")
const {likePost,unlikePost}=require("../controllers/likeController")
const {createPost,getAllPosts,getPostById}=require("../controllers/postController")
const {createComment,}=require("../controllers/commentController")
const {followUser,unfollowUser}=require("../controllers/followController")


router.post("/api/signup",signup)
router.post("/api/authenticate",login)
router.post("/api/follow/:id",followUser)
router.post("/api/unfollow/:id",unfollowUser)
router.get("/api/user",getUser)
router.post("/api/posts",createPost)//---

//router.delete("/api/posts/:id",validation,createReview)
router.post("/api/like/:id",likePost)
router.post("/api/unlike/:id",unlikePost)
router.post("/api/comment/:id",createComment)

 router.get("api/posts",getPostById)
 router.get(" /api/all_posts",getAllPosts)


module.exports=router

