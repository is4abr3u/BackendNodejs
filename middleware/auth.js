import jwt from 'jsonwebtoken'

const segredo = "is4Abr3u" 
export default async function authMiddleware(req, res, next){

    try {
        
        const token = req.headers['authorization']

        console.log(token)
        if(!token){
            throw new Error()
        }

        const decoded =jwt.verify(token, segredo)

        console.log(decoded)
        next()

    } catch(error) {
        res.send(403).send({
            message: "Usuário ou senha invalido"
        })
    }
}