import React from 'react';
import { Tag as TagIcon } from 'lucide-react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700">
      <TagIcon size={14} className="text-gray-400" />
      {label}
    </span>
  );
}