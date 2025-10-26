import { GlassCard } from '../components/ui/GlassCard';
import { BadgeTag } from '../components/ui/BadgeTag';
import { mockBadges } from '../lib/mockData';

export const Badges = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Badges</h1>
        <p className="text-gray-400">
          Collect badges by completing achievements and challenges
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBadges.map((badge) => (
          <GlassCard key={badge.id} hover className="group">
            <div className="flex flex-col items-center text-center">
              {/* Badge Image */}
              <img 
                src={badge.imageUrl}
                alt={badge.name}
                className="w-24 h-24 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Badge Info */}
              <h3 className="text-lg font-bold mb-2">{badge.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{badge.description}</p>
              
              {/* Badge Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                <BadgeTag variant="info">{badge.category}</BadgeTag>
                <BadgeTag variant="success">{badge.rarity}</BadgeTag>
              </div>
              
              {/* Social Points */}
              <div className="mt-4 pt-4 border-t border-white/10 w-full">
                <p className="text-xs text-gray-500">Rewards</p>
                <p className="text-lg font-bold text-dealix-electric-green">
                  +{badge.socialPoints} SP
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};