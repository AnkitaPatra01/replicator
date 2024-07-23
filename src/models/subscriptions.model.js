import mongoose from "mongoose";

const subscriptionSchema = new Schema(
    {
       id:{
        type: String,
        required:true
       },
       subscriber: {
        type: Schema.Types.ObjectId,
        ref :"User"
       },
       channel :{
        type: Schema.Types.ObjectId,
        ref :"User"
       }
    },
    {
        timestamps:true
    }
)

export const subscription = mongoose.model("Subscription", subscriptionSchema)