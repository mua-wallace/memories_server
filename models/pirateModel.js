import mongoose from "mongoose";

const pirateSchema = mongoose.Schema({
    pirateName: String,
    imageUrl: String,
    treasureCheetsNo: Number,
    crewPosition: String,
    pirateCatchCheets:String,
    pegLeg: {
        type:Number,
        default:true
    },
    hookHand: {
        type:Boolean,
        default:true
    },
    eyePatch: {
        type:Boolean,
        default:true
    },
   
});

const pirateModel = mongoose.model('pirates', pirateSchema)

export default pirateModel;