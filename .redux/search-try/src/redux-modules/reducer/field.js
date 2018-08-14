const initState  = [
  {
    id: 'name',
    pattern: [/^[\u4e00-\u9fa5]+&/],
    description: '中文姓名',
    current: '',
  },
  {
    id: 'idType',
    pattern: [/^[A-Z]{1}$/],
    description: '证件类型',
    current: ''
  },
  {
    id: 'idNumber',
    pattern: [/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/, /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/],
    description: '15或18位证件号',
    current: '',
  },
  {
    id: 'branchNo',
    pattern: [/^44[0-9]{4}$/],
    description: '机构号',
    current: '',
  }
]
const fields = (previousState = initState, action) => {
    let currState
    switch(action.type) {
      case 'UPDATE_FIELD':
        let curr = action.payload
        currState = previousState.map(e => ({
          id: e.id,
          pattern: e.pattern,
          current: (e.id === curr.id ? curr.val : e.current),
          description: e.description
        }))
        break
      default:
        currState = previousState
    }
    return currState
}

export default fields
