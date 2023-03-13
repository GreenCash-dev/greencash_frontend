import { atom } from 'recoil';

export interface CertificationPictureState {
  pictureOne: string;
  pictureTwo: string;
  pictureThree: string;
  pictureFour: string;
  pictureFive: string;
}

const PicturesState: CertificationPictureState = {
  pictureOne: '',
  pictureTwo: '',
  pictureThree: '',
  pictureFour: '',
  pictureFive: '',
};

export const certificationPictureState = atom<CertificationPictureState>({
  key: 'certificationPicture',
  default: PicturesState,
});
