-- CreateTable
CREATE TABLE "LandProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tokenName" TEXT NOT NULL,
    "investmentPeriod" TEXT NOT NULL,
    "totalProfit" TEXT NOT NULL,
    "anualProfit" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LandProject_pkey" PRIMARY KEY ("id")
);
