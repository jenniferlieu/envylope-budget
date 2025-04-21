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
    "Allocations",
    {
      id: {
        type: "uuid",
        default: pgm.func("gen_random_uuid()"),
        primaryKey: true,
        notNull: true,
      },
      amount: {
        type: "float",
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
  pgm.dropTable("Allocations", { ifExists: true, cascade: true });
};
