import { useEffect, useState } from 'react';

export const useTitle = (TitleData: string | null) => {
  const [title, setTitle] = useState(TitleData);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.text = title + `${' '}| 그린캐시`;
  };
  useEffect(updateTitle, [title]);
};
