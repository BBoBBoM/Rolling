import axios from 'axios';

export const postFormDataToApi = async (id, formData) => {
  try {
    await axios.post(
      `https://rolling-api.vercel.app/2-5/recipients/${id}/messages/`,
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    throw new Error('데이터를 보내는데 실패했습니다.');
  }
};
