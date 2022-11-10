import React, { FC } from 'react';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBarItem } from '../../interfaces/shared.interface';
import * as Styled from './styled';

interface BuilderLayoutProps {
  progressBarItems: ProgressBarItem[];
  children: React.ReactNode;
  onNavigate: (item: ProgressBarItem) => void;
}

const BuilderLayout: React.FC<BuilderLayoutProps> = ({
  progressBarItems,
  children,
  onNavigate,
}) => {
  return (
    <Styled.Layout>
      <Styled.Header>
        <ProgressBar items={progressBarItems} onNavigate={onNavigate} />
      </Styled.Header>
      {children}
    </Styled.Layout>
  );
};

export default BuilderLayout;
