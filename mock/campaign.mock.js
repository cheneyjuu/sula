import { mock } from 'mockjs';
import { success, logInfo } from './utils';

mock('/api/campaign/list.json', 'post', req => {

  let data = [
    {
      text: '南泉分校',
      value: '100'
    },
    {
      text: '杭州分校',
      value: '101'
    }
  ];

  return data;
});

