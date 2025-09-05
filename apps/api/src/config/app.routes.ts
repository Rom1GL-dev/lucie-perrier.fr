const authRoot = '/auth';
const usersRoot = '/users';
const logsRoot = '/logs';
const blogsRoot = '/blogs';
const faqsRoot = '/faqs';
const imagesRoot = '/images';
const emailRoot = '/email';

const v1 = 'v1';

export const routesV1 = {
  version: v1,
  auth: {
    root: authRoot,
    login: `${authRoot}/login`,
    logout: `${authRoot}/logout`,
    me: `${authRoot}/me`,
  },
  users: {
    root: usersRoot,
    byCustomerId: `${usersRoot}/user/:userEmail`,
  },
  blogs: {
    root: blogsRoot,
  },
  faqs: {
    root: faqsRoot,
  },
  logs: {
    root: logsRoot,
  },
  image: {
    root: imagesRoot,
    upload: `${imagesRoot}/upload/:category`,
    getImage: `${imagesRoot}/:category/:imageName`,
  },
  email: {
    root: emailRoot,
  },
};
