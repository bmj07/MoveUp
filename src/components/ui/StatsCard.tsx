import  { Card } from './Card';
import { StatsCard as StatsCardType } from '../../types';

export const StatsCard = ({ title, value, icon, trend }: StatsCardType) => {
  return (
    <Card className="flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm text-gray-400">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-primary-dark/50 text-primary-neon">
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="flex items-center mt-2">
          <div className={`px-2 py-1 rounded-md text-xs font-medium ${trend.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
          <span className="text-xs text-gray-400 ml-2">vs. mês anterior</span>
        </div>
      )}
    </Card>
  );
};
 