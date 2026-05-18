import React from 'react';
import { images } from '../constants';

export default function DecorativeFrame() {
  return (
    <div className="decorative-frame" aria-hidden="true">
      <img src={images.frame} alt="" />
    </div>
  );
}
