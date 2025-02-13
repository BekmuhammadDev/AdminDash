interface Tnavigation{
    path: string,
    title: string,
    icon: React.JSX.Element | string,
    role?:string[],
}

export const navigation:Tnavigation[] = [
    
    {
        path: '/',
        title: 'Dashboard',
        icon: "bi bi-speedometer ",
        role: ['admin', ],
    },
    {
        path: '/layouts',
        title: 'Layouts',
        icon: "bi bi-columns",
        role: ['admin', ],
    },
    {
        path: '/pages',
        title: 'Pages',
        icon: "bi bi-layout-split ",
        role: ['admin', ],
    },
    {
        path: '/charts',
        title: 'Charts',
        icon: "bi bi-graph-up-arrow",
        role: ['admin', ],
    },
    {
        path: '/tables',
        title: 'Tables',
        icon: "bi bi-file-earmark-medical ",
        role: ['admin', ],
    }
]
interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
  }
  
 export const data: DataType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      firstName: 'Anna',
      lastName: 'White',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      firstName: 'Peter',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '7',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '8',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '9',
      firstName: 'Anna',
      lastName: 'White',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '10',
      firstName: 'Peter',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ];