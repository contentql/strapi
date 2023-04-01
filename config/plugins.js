module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "Ig1HNbz5Z9M+SUHTr/ltug=="),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "leewardslope"),
        api_key: env("CLOUDINARY_KEY", "783694461985968"),
        api_secret: env("CLOUDINARY_SECRET", "S0-Evp6iezzQU8jaLjqhYcqpXJg"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
