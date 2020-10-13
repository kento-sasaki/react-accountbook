import axios from 'axios';
import { addExpense } from '../firebase/firestore';

export const analyze = async (fileData: File) => {
  console.log('Start!');

  const reader = new FileReader();
  const listener = async () => {
    if (typeof reader.result === 'string') {
      const url = `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_VISION_API_KEY}`;
      const body = {
        requests: [
          {
            image: {
              content: reader.result.replace(/data:[a-z]+\/[a-z]+;base64,/, ''),
            },
            features: [
              {
                type: 'DOCUMENT_TEXT_DETECTION',
                maxResults: 10,
              },
            ],
          },
        ],
      };

      const res: any = await axios.post(url, body).catch((error) => {
        console.log(error);
      });
      const amount = Number(
        res.data.responses[0].fullTextAnnotation.text
          .match(/\n合計\n[¥\d,]+\n/gu)[0]
          .match(/\d+/g)
          ?.join(''),
      );

      console.log(amount);
      addExpense(amount, new Date(), 'その他');
    }
  };

  reader.addEventListener('load', listener, false);

  if (fileData) {
    reader.readAsDataURL(fileData);
  }
  console.log('Finish');
};
