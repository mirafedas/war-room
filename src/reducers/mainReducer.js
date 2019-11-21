import CHANGE_IMAGE from '../constants/actionTypes';

const imgSrcEnum = {
  firstImg: 'https://i.ytimg.com/vi/hqULQLUuhMU/hqdefault.jpg',
  secondImg: 'https://cdn.mos.cms.futurecdn.net/hKm2MuLdDLubD6rgeYLeDM-1024-80.jpg'
}

const initialState = {
  imageSrc: imgSrcEnum.firstImg,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGE:
      return {
        ...state,
        imageSrc: state.imageSrc === imgSrcEnum.firstImg ? imgSrcEnum.secondImg : imgSrcEnum.firstImg,
      };
    default:
      return state;
  }
}