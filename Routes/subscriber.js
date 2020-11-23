const express = require('express');
const router = express.Router();
//const Subscriber = require('../Models/subscriber');
const getSubscriber = require('../middleware/get-Subscriber');

const subscriberController = require('../Controllers/subscriberController');

//GET all
router.get('/', subscriberController.subscriber_get_all);

//GET one
router.get('/:id', getSubscriber, subscriberController.subscriber_get_one);

//Create one
router.post('/', subscriberController.subscriber_create_one);

//Update one
router.patch('/:id', getSubscriber, subscriberController.subscriber_update_one);

//Delete one
router.delete('/:id', getSubscriber, subscriberController.subscriber_delete_one);

module.exports = router;