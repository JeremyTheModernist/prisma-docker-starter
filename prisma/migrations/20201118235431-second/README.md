# Migration `20201118235431-second`

This migration has been generated by Jeremy Barnes at 11/18/2020, 6:54:31 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Profile" (
"id" SERIAL,
    "name" TEXT,

    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201118234602-init..20201118235431-second
--- datamodel.dml
+++ datamodel.dml
@@ -2,15 +2,15 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Profile {
-  id Int @default(autoincrement()) @id
-  name String
+  id     Int     @default(autoincrement()) @id
+  name    String?
 }
```

