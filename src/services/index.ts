import { request, atMessage } from '@tarojs/taro';

const API_PREFIX = 'https://c9cabce5-5280-4779-8a78-c680576f0d88.bspapp.com';

const baseRequest = async params => {
  try {
    const { data } = await request(params);
    if (data?.success === false) {
      atMessage({
        message: data.error?.message,
        type: 'error'
      });
    }
    return data;
  } catch (err) {
    atMessage({
      message: err,
      type: 'error'
    });
  }
};

const getAllCategories = async () => {
  const url = API_PREFIX + '/http/getAllCategories';
  return await baseRequest({ url });
};

export { getAllCategories };
