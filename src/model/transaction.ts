import mongoose,{Schema,Document,Model} from "mongoose";

export interface ITransaction extends Document{
    userID:string;
    imgURL:{ img:string } [];
}

const TransactionSchema:Schema<ITransaction> = new Schema({
    userID:{type:String,required:true},
    imgURL:[
        { img:String,required:true}
    ]
});

const Transaction:Model<ITransaction> = mongoose.models.transaction || mongoose.model<ITransaction>("transaction",TransactionSchema);

export default Transaction;
