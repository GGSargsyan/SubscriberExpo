const Subscriber = require('../Models/subscriber');

exports.subscriber_get_all = async (req, res) => {
    try{
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

exports.subscriber_get_one = (req, res) => {
    res.json(res.subscriber);
};

exports.subscriber_create_one = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try{
        const newSub = await subscriber.save();
        res.status(201).json(newSub);
    } catch(err) {
        res.json({message: err.message});
    }
};

exports.subscriber_update_one = async (req, res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name;
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.subscriber_delete_one = async (req, res) => {
    try{
        await res.subscriber.remove();
        res.json({ message: 'Deleted Subscriber'});
    } catch (err){
        res.status(500).json({ message: err.message });
    }
};