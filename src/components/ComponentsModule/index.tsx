import Comment from "components/Posts/Comment"
import PostBox from "components/Posts/PostBox"
import PostDetail from "components/Posts/PostDetail"
import PostEditForm from "components/Posts/PostEditForm"
import PostForm from "components/Posts/PostForm"
import ProfileEditForm from "components/Profile/ProfileEditForm"
import ProfileForm from "components/Profile/ProfileForm"
import LoginForm from "components/Users/LoginForm"
import SignUpIntroPage from "pages/Users/SignUpIntroPage"
import SignupForm from "components/Users/SignupForm"
import Header from "components/Header"
import Footer from "components/Footer"


export const componentsModule = {
  Posts: {
    Comment,
    PostBox,
    PostDetail,
    PostEditForm,
    PostForm,
  },
  Profile: {
    ProfileEditForm,
    ProfileForm
  },
  Users : {
    LoginForm,
    SignUpIntroPage,
    SignupForm
  },
  Header: Header,
  Footer: Footer
};

