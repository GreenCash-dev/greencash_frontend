interface stepTwoDataTypes {
  id: number;
  tag: string;
  imgAddress: string;
  name: string;
}

interface stepTwoArrType {
  paper: stepTwoDataTypes[];
}

const stepTwoData: stepTwoArrType = {
  paper: [
    {
      id: 1,
      tag: 'paper',
      imgAddress: 'https://dmkorea.kr/wp-content/uploads/2021/04/newsp001.jpg',
      name: '신문',
    },
    {
      id: 2,
      tag: 'paper',
      imgAddress:
        'https://images.pexels.com/photos/315791/pexels-photo-315791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '노트',
    },
    {
      id: 3,
      tag: 'paper',
      imgAddress:
        'https://images.pexels.com/photos/4498122/pexels-photo-4498122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: '박스',
    },
    {
      id: 4,
      tag: 'paper',
      imgAddress: 'https://images.pexels.com/photos/9869068/pexels-photo-9869068.jpeg',
      name: '종이컵',
    },
  ],
};

export default stepTwoData;

export const descriptionData = {
  paper: {},
};
