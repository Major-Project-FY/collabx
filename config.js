const env = process.env.NODE_ENV;

let myValue;

if (typeof window !== "undefined") {
  // Access localStorage here
  myValue = localStorage.getItem("githubAuth");
}

const Config = {
  root:
    env === "development"
      ? "http://127.0.0.1:5000"
      : "https://api.collabx.tech",
  auth: {
    login: "/auth/user/login",
    signup: "/auth/user/signup",
    signupOtp: "/auth/user/signup/otp",
    verifyOtp: "/auth/user/signup/verify-otp",
    github: "/auth/github",
    githubAuthorize: "/auth/github/authorize",
  },
  user: {
    githubInfo: "/user/github-info",
    githubRepos: "/user/github-repos",
    basicInfo: "/user/basic-info",
    ranking: "/user/ranking",
    recommendations: "/user/recommendations"
  },
  post: {
    list: "/posts",
    findOne: "/posts/post/:id",
    createNew: "/posts/post",
  },
  env: process.env.NODE_ENV,

  isGithubAuth: myValue,
};

export default Config;
