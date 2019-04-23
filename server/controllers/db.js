const { Pool } = require('pg');
const connectionString = process.env.DB_URI;

const pool = new Pool({
  connectionString: connectionString
});

module.exports = pool;




























// CREATE TABLE "Users" (
// 	"id" serial NOT NULL,
// 	"name" VARCHAR(255) NOT NULL UNIQUE,
// 	"password" VARCHAR(255) NOT NULL,
// 	CONSTRAINT Users_pk PRIMARY KEY ("id")
// ) WITH (
//   OIDS=FALSE
// );

// CREATE TABLE "Snippets" (
// 	"id" serial NOT NULL,
// 	"name" VARCHAR(255) NOT NULL,
// 	"content" VARCHAR(255) NOT NULL,
// 	"num_faves" integer NOT NULL,
// 	"created_by" integer NOT NULL,
// 	CONSTRAINT Snippets_pk PRIMARY KEY ("id")
// ) WITH (
//   OIDS=FALSE
// );

// CREATE TABLE "UserFaveSnippets" (
// 	"user_id" integer NOT NULL,
// 	"snippet_id" integer NOT NULL
// ) WITH (
//   OIDS=FALSE
// );

// ALTER TABLE "Snippets" ADD CONSTRAINT "Snippets_fk0" FOREIGN KEY ("created_by") REFERENCES "Users"("id");
// ALTER TABLE "UserFaveSnippets" ADD CONSTRAINT "UserFaveSnippets_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("id");
// ALTER TABLE "UserFaveSnippets" ADD CONSTRAINT "UserFaveSnippets_fk1" FOREIGN KEY ("snippet_id") REFERENCES "Snippets"("id");

