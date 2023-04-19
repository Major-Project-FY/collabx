const Config = {
  root: "https://api.collabx.tech",
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
  },
};

export default Config;
