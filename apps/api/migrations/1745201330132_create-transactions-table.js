/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable(
    "Transactions",
    {
      id: {
        type: "uuid",
        default: pgm.func("gen_random_uuid()"),
        primaryKey: true,
        notNull: true,
      },
      type: {
        type: "int",
        notNull: true,
      },
      date: {
        type: "timestamp",
        notNull: true,
      },
      memo: {
        type: "text",
      },
      amount: {
        type: "float",
        notNull: true,
      },
      account_id: {
        type: "uuid",
        references: "Accounts",
        notNull: true,
      },
      envelope_id: {
        type: "uuid",
        references: "Envelopes",
        notNull: true,
      },
      createdAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
      updatedAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    },
    { ifNotExists: true }
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable("Transactions", { ifExists: true, cascade: true });
};
