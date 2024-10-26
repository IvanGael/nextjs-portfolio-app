import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterEffectProps {
  text?: string;
  strings?: string[];
  variant?: string;
  component?: React.ElementType;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, strings, variant, component }) => {
  const Component = component || 'div';
  const tailwindClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
  };

  const className = variant ? tailwindClasses[variant as keyof typeof tailwindClasses] : '';

  if (text && variant && component) {
    return (
      <Component className={className}>
        <Typewriter
          options={{
            strings: [text],
            autoStart: true,
            loop: false,
          }}
        />
      </Component>
    );
  }

  if (strings && variant && component) {
    return (
      <Component className={className}>
        <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
          }}
        />
      </Component>
    );
  }

  if (strings) {
    return (
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    );
  }

  return (
    <Typewriter
      options={{
        strings: [text || ''],
        autoStart: true,
        loop: false,
      }}
    />
  );
};

export default TypewriterEffect;