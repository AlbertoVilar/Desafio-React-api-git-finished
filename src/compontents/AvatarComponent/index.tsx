// AvatarComponent.tsx
import React from 'react';
import './styles.css';

interface AvatarProps {
  avatarUrl: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ avatarUrl }) => {
  return (
    <div className="avatar-component">
      <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
    </div>
  );
}

export default AvatarComponent;
