import { mock } from 'mockjs';

mock('/api/basicData/subSchoolList.json', 'get', req => {

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
