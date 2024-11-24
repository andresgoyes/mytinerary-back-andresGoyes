import { Schema, model } from "mongoose";

let collection = 'itineraries';

let schema = new Schema({
    creator: { type: String, required: true },
    creatorPhoto: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, min: 1, max: 5, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: [{ type: String, required: true }],
    city: { type: Schema.Types.ObjectId, ref: 'cities', required: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;