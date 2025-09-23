import React from 'react';

interface SkillsPanelProps {
  groups: Record<string, string[]>;
}

// removed icon circle per request

const SkillsPanel: React.FC<SkillsPanelProps> = ({ groups }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(groups).map(([name, items]) => (
          <div key={name} className="bg-primary/10 border border-secondary/10 rounded-lg p-4">
            <div className="mb-3">
              <h4 className="text-md font-semibold text-textPrimary">{name}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((it) => (
                <span key={it} className="inline-flex items-center px-3 py-1 rounded-full bg-white/3 text-textSecondary border border-secondary/10 text-sm hover:bg-secondary/10 transition">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SkillsPanel;
