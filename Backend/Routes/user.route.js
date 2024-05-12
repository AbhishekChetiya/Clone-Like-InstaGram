import { Router } from "express";
import { CurrentUserPassword, UpdateAvatar, getProfileofUser, loginuser, registerUser, Makesearchwrequest, getProfileofAlt, Followrequest, GetAllPost } from "../Controllers/user.js";
import { upload } from "../Middleware.js/Multer.js";
import { verifyJWT } from "../Middleware.js/Auth.middleware.js";
import Postimg, { AddComment, PostDelete, Posthitlike, deleteComment, postDetail } from "../Controllers/Post.js";

const router = Router();

router.route("/register").post(
    upload.fields([{
        name: "Avatar",
        maxCount: 1,
    }]),
    registerUser)
router.route("/FindUser").get(Makesearchwrequest);
router.route("/follow").post(verifyJWT);
router.route("/login").post(loginuser)
router.route("/ChangePassword").post(verifyJWT, CurrentUserPassword);
router.route("/UpdateAvatar").post(upload.fields([{
    name: "Avatar",
    maxCount: 1,
}]), verifyJWT, UpdateAvatar);
router.route("/Profile").get(verifyJWT, getProfileofUser);
router.route("/Profile/alt").get(verifyJWT, getProfileofAlt);
router.route("/Post/Upload").post(
    upload.fields([{
        name: "Postimg",
        maxCount: 1,
    }]),
    verifyJWT, Postimg
);
router.route("/allPost").get(verifyJWT, GetAllPost);
router.route("/Post/delete").post(verifyJWT, PostDelete);
router.route("/Follow/request").post(verifyJWT, Followrequest);
router.route("/Post/detail").get(verifyJWT, postDetail);
router.route("/Post/addcomment").post(verifyJWT, AddComment);
router.route("/Post/delcomment").post(verifyJWT, deleteComment);
router.route("/Post/hitlike").post(verifyJWT, Posthitlike);
export default router;