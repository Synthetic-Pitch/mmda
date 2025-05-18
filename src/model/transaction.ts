import mongoose,{Schema,Document,Model} from "mongoose";

export interface ITransaction extends Document{
    transactionID:string;
    imgURL:{ img:string } [];
}

const TransactionSchema:Schema<ITransaction> = new Schema({
    transactionID:{required:true,type:String},
    imgURL:[
       { img: { type: String, required: true } }
    ]
});

const Transaction:Model<ITransaction> = mongoose.models.transaction || mongoose.model<ITransaction>("transaction",TransactionSchema);

export default Transaction;
