import mongoose from "mongoose";
const AttendanceSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    studentId: {
        type: [mongoose.Schema.Types.ObjectId],
    },
    checkInTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["present", "absent", "late"],
        default: "absent",
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});
export default mongoose.model("Attendance", AttendanceSchema);
