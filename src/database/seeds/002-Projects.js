/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
  .then(function (){
    return knex('projects').insert([
      {
        title: 'Initial Project',
        user_id: 1
      }
    ]);
  })
}