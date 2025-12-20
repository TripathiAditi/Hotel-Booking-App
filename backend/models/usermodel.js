import mongoose from "../config/mongoose.js";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ["admin", "staff", "customer"],
      default: "customer"
    },

    phone: {
      type: String
    }
  },
  { timestamps: true }
);



// 🔐 Hash password before saving
// //userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });


// 🔍 Compare password during login
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;