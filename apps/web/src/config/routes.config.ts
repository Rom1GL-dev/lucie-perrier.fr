export const routes = {
  public: {
    home: {
      getHref: () => '/'
    },
    aProposDeMoi: {
      getHref: () => '/a-propos-de-moi'
    },
    tarifs: {
      getHref: () => '/tarifications'
    },
    blog: {
      getHref: () => '/blogs'
    },
    contact: {
      getHref: () => '/contact'
    },
    mentionLegale: {
      getHref: () => '/mentions-legales'
    },
    politiqueDeConfidentialite: {
      getHref: () => '/politique-de-confidentialite'
    }
  },
  admin: {
    login: {
      path: '/admin/connexion',
      getHref: () => '/admin/connexion'
    },
    dashboard: {
      path: '/admin/tableau-de-bord',
      getHref: () => '/admin/tableau-de-bord'
    },
    blog: {
      path: '/admin/blogs',
      getHref: () => '/admin/blogs',
      blogById: {
        path: '/admin/blog/:id',
        getHref: (id: string) => `/admin/blog/${id}`
      }
    },
    blogs: {
      path: '/admin/blogs',
      getHref: () => '/admin/blogs'
    },
    blogsNew: {
      path: '/admin/blogs/nouveau',
      getHref: () => '/admin/blogs/nouveau'
    },
    blogDetails: {
      path: '/admin/blog/:slug',
      getHref: (id: string | undefined) => `/admin/blog/${id}`
    },
    faqs: {
      path: '/admin/faqs',
      getHref: () => '/admin/faqs'
    },
    faqsNew: {
      path: '/admin/faqs/nouveau',
      getHref: () => '/admin/faqs/nouveau'
    },
    faqDetails: {
      path: '/admin/faq/:slug',
      getHref: (id: string | undefined) => `/admin/faq/${id}`
    },
    users: {
      path: '/admin/utilisateurs',
      getHref: () => '/admin/utilisateurs'
    },
    userNew: {
      path: '/admin/utilisateurs/nouveau',
      getHref: () => '/admin/utilisateurs/nouveau'
    },
    userDetails: {
      path: '/admin/utilisateurs/:slug',
      getHref: (id: string) => `/admin/utilisateurs/${id}`
    }
  }
} as const;
