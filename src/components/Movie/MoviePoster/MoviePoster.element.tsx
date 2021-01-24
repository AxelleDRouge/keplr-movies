import { Spin } from 'antd';
import React, { useContext } from 'react';
import { APIContext } from '../../../services/context/api.context';
import { Image } from './MoviePoster.style';

interface MoviePosterProps {
  size: string;
  posterPath: string;
  fit: boolean;
}

export default function MoviePoster({
  size,
  posterPath,
  fit,
}: MoviePosterProps) {
  const { imagesConfig } = useContext(APIContext);
  return imagesConfig ? (
    <Image
      src={`${imagesConfig.secure_base_url}/${imagesConfig.poster_sizes.find(
        (s) => s === size
      )}${posterPath}`}
      alt=''
      fit={fit}
    />
  ) : (
    <Spin />
  );
}
