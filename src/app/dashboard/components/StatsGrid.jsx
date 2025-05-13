import { Wallet, TrendingUp, BarChart3 } from "lucide-react";
import { StatCard } from "./StatCard";

export const StatsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <StatCard
      title="Total Balance"
      value="$12,345.67"
      icon={Wallet}
      className="bg-blue-500/10 dark:bg-blue-500/20"
    />
    <StatCard
      title="Total Returns"
      value="+15.4%"
      icon={TrendingUp}
      className="bg-green-500/10 dark:bg-green-500/20"
    />
    <StatCard
      title="Active Investments"
      value="8"
      icon={BarChart3}
      className="bg-purple-500/10 dark:bg-purple-500/20"
    />
  </div>
);
