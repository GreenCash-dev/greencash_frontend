interface datasTypes {
  id: number;
  text: string;
  name: string;
  backgroundColor: string;
  textColor: string;
  donotItem: string;
  otherTextureTitle: string;
  otherTexture: string;
  notTextureTitle: string;
  notTexture: string;
  doway: string;
  dowayTip: string;
}
const datas: datasTypes[] = [
  {
    id: 1,
    text: '종이류',
    name: 'one',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 2,
    text: '종이팩류',
    name: 'two',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이팩류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 3,
    text: '유리병류',
    name: 'three',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 4,
    text: '캔류',
    name: 'four',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 5,
    text: '의류',
    name: 'five',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 6,
    text: '플라스틱류',
    name: 'six',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 7,
    text: 'BOX류',
    name: 'seven',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 8,
    text: '비닐류',
    name: 'eight',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 9,
    text: '고철류',
    name: 'nine',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 10,
    text: '스티로폼',
    name: 'ten',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
  {
    id: 11,
    text: '폐형광등, 폐건전지',
    name: 'eleven',
    backgroundColor: '#141B3D',
    textColor: '#fff',
    donotItem: '종이류로 배출하면 안되는 품목',
    otherTextureTitle: '*다른 재질과 혼합 구성된 종이: ',
    otherTexture: '영수증, 금/은박지, 천연재료 벽지, PVC코팅 벽지 등',
    notTextureTitle: '*종이가 아닌 소재: ',
    notTexture: '부직포, 플라스틱 합성지',
    doway: '종이팩은 종이팩 전용수거함에 배출',
    dowayTip:
      '(종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록 가급적 끈 등으로 묶어 종이류 수거함에 배출)',
  },
];

export default datas;
