import axios from 'axios';

//Codeit에서 제공하는 기본 background이미지
export async function getBackgroundList() {
  const URL = 'https://rolling-api.vercel.app/background-images/';
  try {
    const response = await axios.get(URL);

    if (!response.data) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
    throw error;
  }
}

//recipients post요청
export async function createRecipient(formData) {
  const url = 'https://rolling-api.vercel.app/2-5/recipients/';

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
}

//IBB사이트 포스트 요청기능 이미지 업로드후 업로드한 이미지 url받아오기
export async function uploadImageIBB(file) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(
      'https://api.imgbb.com/1/upload?key=95d8f7e8290e8ffef56546465f96b389',
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.data.url;
    } else {
      console.error('업로드실패');
      return null;
    }
  } catch (error) {
    console.error('업로드실패:', error);
    return null;
  }
}
