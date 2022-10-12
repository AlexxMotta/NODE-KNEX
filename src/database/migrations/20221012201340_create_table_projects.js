exports.up = knex => knex.schema.createTable('project', table =>{
    table.increments('id')
    table.text('title')
    //Relations
    table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onDelete("CASCADE")

    table.timestamp(true,true)
})

exports.down = knex => knex.schema.dropTable('project')
