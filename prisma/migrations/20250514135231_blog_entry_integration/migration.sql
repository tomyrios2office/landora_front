-- CreateTable
CREATE TABLE "BlogEntry" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "BlogEntry_pkey" PRIMARY KEY ("id")
);
