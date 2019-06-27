import axios from 'axios';

const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const uploadImage = file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  return axios
    .post(CLOUDINARY_URL, formData)
    .then(res => {
      if (res.data.secure_url !== '') {
        return res.data.secure_url;
      }
    })
    .catch(err => false);
};

export default uploadImage;
