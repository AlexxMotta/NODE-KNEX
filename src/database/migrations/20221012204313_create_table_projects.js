exports.up = knex => knex.schema.createTable('projects', table =>{
    table.increments('id')
    table.text('title')
    //Relations
    table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onDelete("CASCADE")

    table.timestamps(true,true)
})

exports.down = knex => knex.schema.dropTable('projects')