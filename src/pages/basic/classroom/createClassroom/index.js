import { message } from 'antd';

async function show(id, isView) {
  message.loading("正在加载...")
  let initValue = null
  const formMode = isView ? 'view' : id ? 'edit': 'create'
  if (id) {
    const result = null; //await getClassroomInfo();
    initValue = result.value;
  }
  message.destroy()

}

export { show };
export default {
  show
}
