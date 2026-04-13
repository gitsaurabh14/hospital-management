import { v2 as cloudinery } from "cloudinary";

const connectCloudinery = async () => {
  cloudinery.config({
    cloud_name: process.env.CLOUDINERY_NAME,
    api_key: process.env.CLOUDINERY_API_KEY,
    api_secret: process.env.CLOUDINERY_SECRETE_KEY,
  });
};

export default connectCloudinery;
