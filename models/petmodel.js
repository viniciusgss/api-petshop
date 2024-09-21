
// Schema para o Cachorro
const cachorroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    raca: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refere-se ao model Usuario
        required: true,
    }
});

// Model para o Cachorro

module.exports = mongoose.model('Cachorro', cachorroSchema);