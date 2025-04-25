import mongoose from "mongoose";
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    attendees: {
        type: [mongoose.Schema.Types.ObjectId],
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});
export default mongoose.model("Event", EventSchema);
