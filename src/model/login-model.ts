import mongoose,{Schema,Document,Model} from "mongoose";

export interface IUser extends Document{
    username :string;
    password :string;
    gmail :string
}

const UserSchema:Schema<IUser> = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    gmail:{type:String,required:true}
});

const User:Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",UserSchema);

export default User;