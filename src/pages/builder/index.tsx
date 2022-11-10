import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import BuilderLayout from '../../layouts/BuilderLayout';
import { ProgressBarItem } from '../../interfaces/shared.interface';
import { progressBarInitialValue, progressBarVar } from '../../apollo/cache';
import { URL } from '../../appConstants';

interface BuilderProps {
  children: React.ReactNode;
}

const Builder: React.FC<BuilderProps> = ({ children }) => {
  const progressBarItems = useReactiveVar(progressBarVar);
  const router = useRouter();

  useEffect(() => {
    return () => {
      progressBarVar(JSON.parse(JSON.stringify(progressBarInitialValue)));
    };
  }, []);

  const onNavigate = (item: ProgressBarItem) => {
    const currentProgressBarItems = progressBarVar().map((x) => {
      x.isActive = x === item;

      return x;
    });

    progressBarVar(currentProgressBarItems);
    router.push(item.link);
  };

  return (
    <>
      <BuilderLayout
        progressBarItems={progressBarItems}
        onNavigate={onNavigate}
      >
        {children}
      </BuilderLayout>
    </>
  );
};

export default Builder;
