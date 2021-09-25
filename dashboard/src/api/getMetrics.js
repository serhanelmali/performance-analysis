import axios from "axios";

const getMetrics = async ({ onSuccess, onError } = {}) => {
  try {
    const result = await axios(process.env.REACT_APP_API_URL);
    if (onSuccess) onSuccess(result);
    return result;
  } catch (err) {
    if (onError) onError(err);
  }
};

export default getMetrics;
