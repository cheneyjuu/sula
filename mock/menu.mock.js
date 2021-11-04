import { mock } from "mockjs";

mock('/api/menus', 'get', req => {
    return [
        {
            path: '/demo',
            name: 'demo',
            icon: 'heart',
          }
    ];
})