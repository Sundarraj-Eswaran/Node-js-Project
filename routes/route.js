const express = require('express');
const router = express.Router();
const ServiceCall = require('../services/service');

/**
 * Get User by user Id
 */
router.get('/', async function(req, res, next) {
  try {
    res.status(200).json(await ServiceCall.getUserByID(req.query.userid));
  } catch(err) {
    console.error(`Error while getting on DB `, err.message);
    next(err);
  }
});

/**
 * Get User and Albums by user Id
 */
router.get('/Album', async function(req, res, next) {
  try {
    res.status(200).json(await ServiceCall.getUserAlbumByUserID(req.query.userid));
  } catch(err) {
    console.error(`Error while getting on DB`, err.message);
    next(err);
  }
});

/**
 * Get Albums and Images by user Id
 */
router.get('/AlbumImage', async function(req, res, next) {
  try {
    res.status(200).json(await ServiceCall.getAlbumsImagesbyUser(req.query.userid, req.query.orderbyTitle, req.query.page));
  } catch(err) {
    console.error(`Error while getting on DB`, err.message);
    next(err);
  }
});


module.exports = router;