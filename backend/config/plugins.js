module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        large: 1920,
        medium: 1200,
        small: 420,
      },
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },      
    },
  },
});