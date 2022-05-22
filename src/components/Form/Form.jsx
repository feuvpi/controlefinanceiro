import React, { useState } from 'react';
import * as C from './Styles.jsx';


const Form = ({ handleAdd }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);


    const handleSave = () => {
        if(!desc || !amount) {
            alert("Necessário informar descrição e valor.");
            return;
        } else if (amount <= 0) {
            alert("O valor necessita ser positivo.")
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            isExpense: isExpense
        }

        handleAdd(transaction)

        setDesc("");
        setAmount("");
    }

    

  return (
    <>
    
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input
                 value={amount}
                 type="number"
                 onChange={(e) => setAmount(e.target.value)}
                 />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                type="radio"
                id="rIncome"
                name="groupRadio"
                onChange={() => setExpense(false)}
                />
                <C.Label htmlFor="rIncome">Entrada</C.Label>
                <C.Input
                type="radio"
                id="rExpenses"
                name="groupRadio"
                onChange={() => setExpense(true)}
                />
                <C.Label htmlFor="rIncome">Saida</C.Label>
                
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Container>
    
    
    </>
  )
}

export default Form