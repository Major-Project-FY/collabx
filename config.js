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
    githubInfo: "/user/github/info",
    githubRepos: "/user/github/repos",
    basicInfo: "/user/info",
    ranking: "/user/ranking",
    recommendations: "/user/recommendations"
  },
  post: {
    list: "/posts",
    findOne: "/posts/post/:id",
    createNew: "/posts/post",
  },
  statement:{
    userlist: "/statements/6157cd65-a2c1-4c11-8f4d-6d26daa4b3cf",
    list: "/user/statements",
    createNew: "/statements/post",
  },
  env: process.env.NODE_ENV,

  isGithubAuth: myValue,
};

export default Config;
