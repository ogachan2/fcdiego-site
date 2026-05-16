ALTER TABLE "News"
ADD COLUMN "category" TEXT,
ADD COLUMN "date" TIMESTAMP(3),
ADD COLUMN "excerpt" TEXT,
ADD COLUMN "imageUrl" TEXT,
ADD COLUMN "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "updatedAt" TIMESTAMP(3);

UPDATE "News"
SET "date" = "createdAt"
WHERE "date" IS NULL;

UPDATE "News"
SET "updatedAt" = "createdAt"
WHERE "updatedAt" IS NULL;

ALTER TABLE "News"
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET NOT NULL;

CREATE INDEX "News_isPublished_date_idx" ON "News"("isPublished", "date");
