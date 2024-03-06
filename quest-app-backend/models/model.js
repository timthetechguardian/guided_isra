const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Object_Id: {
        required: true,
        type: String
    },
    asset_name: {
        required: true,
        type: String
    },
    software_owner: {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        position: {
            required: true,
            type: String
        },
        department: {
            required: true,
            type: String
        }
    },
    asset_description: {
        required: true,
        type: String
    },
    additional_notes: {
        required: true,
        type: String
    },
    personal_data_cat: {
        required: false,
        type: []
    },
    confidential_business_data_cat: {
        required: false,
        type: []
    },
    no_data_cat: {
        required: true,
        type: Boolean
    },
    userkind: {
        required: true,
        type: String
    },
    shared_user: {
        required: true,
        type: String
    },
    usercred: {
        required: true,
        type: String
    },
    password_complex: {
        required: true,
        type: String
    },
    mfa_opt: {
        required: true,
        type: String
    },
    mfa_use: {
        required: true,
        type: String
    },
    mfa_name: {
        required: true,
        type: String
    },
    passwd_change: {
        required: true,
        type: String
    },
    passwdmg_use: {
        required: true,
        type: String
    },
    passwdmg_name: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Data', dataSchema);