const db = require('./db');
const config = require('../config');

/**
 * 
 * @param {Pass the user id form query and get the user info} userid 
 * @returns 
 */
async function getUserByID(userid) {
  let data;
   await db.rawQuery("SELECT name as 'UserName', email as 'Email' FROM users WHERE id ="+userid).then(results=>{
    return data = results;
     });
  return {
    data
  }
}

/**
 * 
 * @param {Pass the user id form query and get the user and album info} userid 
 * @returns 
 */
async function getUserAlbumByUserID(userid) {
  let data;
  await db.rawQuery(
    "SELECT users.name 'UserName', users.email as 'Email', albums.title as 'AlbumTitle' FROM users " +
    "INNER JOIN albums ON albums.userId = users.id " +
    "WHERE users.id = "+userid).then(results=>{
      return data = results;
       });
  return {
    data
  }
}

/**
 * 
 * @param {Pass the user id form query and get the user, album and image  info} userid 
 * @param {Pass the orderbyTitle=ASC form query and get the user, album and image  info} orderby 
 * @param {Pass the Page= 1 to get pasge wise info form query and get the user, album and image  info} page 
 * @returns 
 */
async function getAlbumsImagesbyUser(userid,orderby, page = 1) {
  
  let order = ((orderby !=="" && orderby === config.orderByASC)? config.orderByASC : (orderby === config.orderByDesc)? config.orderByDesc :config.orderByASC);
  const offset = (page - 1) * config.listPerPage;
  let data;
 
  await db.rawQuery(
  "SELECT users.name 'UserName', users.email as 'Email', albums.title as 'AlbumTitle', " +
  "images.title as 'Imagetitle', images.url as 'ImageURL' FROM users " +
  "INNER JOIN albums ON albums.userId = users.id " +
  "INNER JOIN images ON images.albumId = albums.id " +
  "WHERE users.id = "+userid+" " +
  "ORDER BY albums.title "+order+" " +
  "LIMIT "+offset+", "+config.listPerPage).then(results=>{
    return data = results;
     });
  const meta = {page};

  return {
    data,
    meta
  }
}


module.exports = {
  getUserByID,
  getUserAlbumByUserID,
  getAlbumsImagesbyUser

}