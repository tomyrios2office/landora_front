export const StatCard = ({ title, value, icon: Icon, className }) => (
  <div className={`p-6 rounded-xl ${className} transition-all hover:scale-105`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <Icon className="w-8 h-8 opacity-80" />
    </div>
  </div>
);
