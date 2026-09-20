import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{id:text('id').primaryKey(),kind:text('kind').notNull(),data:text('data').notNull()},t=>[index('idx_records_kind').on(t.kind)]);
export const users=sqliteTable('users',{id:text('id').primaryKey(),hash:text('hash').notNull(),salt:text('salt').notNull()});
export const sessions=sqliteTable('sessions',{id:text('id').primaryKey(),user:text('user').notNull(),expires:integer('expires').notNull()});
export const attempts=sqliteTable('attempts',{id:text('id').primaryKey(),count:integer('count').notNull(),expires:integer('expires').notNull()});

