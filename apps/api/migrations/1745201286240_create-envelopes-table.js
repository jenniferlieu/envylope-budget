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
    "Envelopes",
    {
      id: {
        type: "uuid",
        default: pgm.func("gen_random_uuid()"),
        primaryKey: true,
        notNull: true,
      },
      name: {
        type: "text",
        notNull: true,
        unique: true,
      },
      note: {
        type: "text",
      },
      balance: {
        type: "float",
        default: 0,
      },
      budget: {
        type: "float",
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
  pgm.dropTable("Accounts", { ifExists: true, cascade: true });
};
