import React from 'react';
import type { FeatureCardProps } from '../lib/types';
import { mitiFeatures } from '../lib/data';

const FeatureCard: React.FC<FeatureCardProps & { isReversed: boolean }> = ({ 
  heading, 
  subtitle, 
  imageSrc, 
  imageAlt, 
  tags: _tags, 
  icon: Icon,
  isReversed
}) => {
  return (
    <div className={`flex items-center gap-3 mb-8 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Image Container */}
      <div className="h-full w-1/2">

        <div  className="h-[60dvh] bg-primary/70 rounded-md overflow-hidden">
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          /> */}
        </div>
      </div>

      <div className="w-1/2 p-6 flex flex-col items-start justify-start">
        <div className="flex items-center gap-2 mb-2">
          {Icon ? 
          <div className='bg-primary px-2 py-3 rounded-full'>
            <Icon className="h-8 w-10 text-secondary " aria-hidden="true" />
          </div> : null}
          {/* {tags.map((tag) => (
            <span key={tag} className={`text-xs uppercase mono-font px-2 py-1 rounded-full font-medium 
              ${tag === 'Live' ? 'bg-green-100 text-green-800' : 
                'bg-yellow-100 text-yellow-800'}`}>
              {tag}
            </span>
          ))} */}
        </div>
        <h3 className="text-3xl font-bold mb-3 mt-3">{heading}</h3>
        <p className="text-slate-700 text-lg max-w-xl leading-8">{subtitle}</p>
      </div>
    </div>
  );
};

export const FeatureGrid = () => {
  return (
    <div className="flex flex-col gap-24 py-6">
      {mitiFeatures.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} isReversed={index % 2 === 1} />
      ))}
    </div>
  );
};
