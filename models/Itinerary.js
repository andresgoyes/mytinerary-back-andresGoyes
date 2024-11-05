import { Schema, model } from "mongoose";

let collection = 'itineraries';

let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, min: 1, max: 5, required: true },
    duration: { type: Number, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'cities', required: true },
    hashtags: [{ type: String, required: true }],
    likes: { type: Number, required: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;