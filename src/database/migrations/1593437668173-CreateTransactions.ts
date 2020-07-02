import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1593437668173 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'value',
            type: 'int'
          },
          {
            name: 'type',
            type: 'varchar'
          },
          {
            name: 'category_id',
            type: 'varchar'
          },
          {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
          },
          {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('transactions')
  }

}
