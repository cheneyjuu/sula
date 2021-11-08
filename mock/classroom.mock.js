import { mock } from 'mockjs';

mock('/api/classroom.json', 'post', req => {
    const data = {
        results: [
            {
                id: 1,
                cno: 'JS1001',
                cname: '101',
                addr: '北一楼',
                branchschool: '川沙校区',
                col: '6',
                row: '4',
                LT: '2',
                CT: '2',
                RT: '2',
                seated: '',
                ison: '1'
            },
            {
                id: 2,
                cno: 'JS1002',
                cname: '201',
                addr: '北一楼',
                branchschool: '川沙校区',
                col: '8',
                row: '5',
                LT: '2',
                CT: '4',
                RT: '2',
                seated: '',
                ison: '1'
            },
            {
                id: 3,
                cno: 'JS1003',
                cname: '204',
                addr: '北一楼',
                branchschool: '川沙校区',
                col: '7',
                row: '6',
                LT: '1',
                CT: '4',
                RT: '2',
                seated: '6;7',
                ison: ''
            }
        ]
    }
    return data;
  });