import mongoose from 'mongoose';
const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
});

// Change "registers" to "data" to match your collection name
const RegisterModel = mongoose.model("data", RegisterSchema);

export default RegisterModel;


