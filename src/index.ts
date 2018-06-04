import axios from "axios";
import FormData from "form-data";

export const upload = async (gyaonId: string, blob: any): Promise<void> => {
    const formData = new FormData();
    formData.append("file", blob, "hoge.wav");
    return await axios.post(`https://gyaon.com/upload/${gyaonId}`, formData).catch(err => err);
};
