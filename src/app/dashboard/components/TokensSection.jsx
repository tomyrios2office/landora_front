import { TokenCard } from "./TokenCard";

export const TokensSection = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
    <h2 className="text-xl font-bold mb-4">Your Tokens</h2>
    <div className="space-y-4">
      <TokenCard
        name="REENTAL Token"
        amount="1,234"
        value="5,678.90"
        change={2.5}
      />
      <TokenCard
        name="Stake Token"
        amount="567"
        value="2,345.67"
        change={-1.2}
      />
      <TokenCard
        name="Yield Token"
        amount="890"
        value="3,456.78"
        change={4.7}
      />
    </div>
  </div>
);
