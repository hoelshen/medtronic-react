import { Item } from './itemType'

const mockData: Item = {
  id: 1,
  name: '爷爷',
  children: [
    {
      id: 2,
      name: '爸爸',
      children: [
        {
          id: 5,
          name: '我',
          children: [
            {
              id: 9,
              name: '儿子'
            },
            {
              id: 10,
              name: '女儿'
            }
          ]
        },
        {
          id: 6,
          name: '妹妹'
        }
      ]
    },
    {
      id: 3,
      name: '二叔',
      children: [
        {
          id: 7,
          name: '堂哥'
        },
        {
          id: 8,
          name: '堂妹',
          children: [
            {
              id: 11,
              name: '侄子'
            },
            {
              id: 12,
              name: '侄女'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: '三姑'
    }
  ]
}

export { mockData }
