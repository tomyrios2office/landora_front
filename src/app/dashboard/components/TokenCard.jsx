import { DollarSign } from "lucide-react";

export const TokenCard = ({ name, amount, value, change }) => (
  <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm opacity-60">{amount} tokens</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">${value}</p>
        <p
          className={`text-sm ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}%
        </p>
      </div>
    </div>
  </div>
);
