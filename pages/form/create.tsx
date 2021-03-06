import '../../styles/Home.module.css'
import React, { useState } from 'react'
import { QuestionInterface } from '../../src/question'
const axios = require('axios');
const url = 'https://www.surveygyu.ml'

function CreateForm() {

    const [questions, setQuestions] = useState<Array<QuestionInterface>>([])

    const [title, setTitle] = useState('');

    const qPost = async () => {
        const data = { questions: questions }
        await axios.post(url + "/question/create", data,)
    }

    const addQuestion = (title) => {
        const cp = [...questions]
        const qu = {
            qType: 'checkbox',
            btn: false,
            options: [],
            title: '',
            desc: ''
        }
        title === '' ? qu.title = 'default' : qu.title = title
        cp.push(qu)
        setQuestions(cp)
    }

    const delQuestion = (index) => {
        const cp = [...questions]
        cp.splice(index, 1)
        setQuestions(cp)
    }

    const editqType = (index, value) => {
        const cp = [...questions]
        cp[index].qType = value
        setQuestions(cp)
    }

    const editTitle = (index, text) => {
        const cp = [...questions]
        cp[index].title = text
        setQuestions(cp)
    }

    const editDescription = (index, text) => {
        const cp = [...questions]
        cp[index].desc = text
        setQuestions(cp)
    }

    const openQuestion = (index) => {
        const cp = [...questions]
        cp[index].btn = !cp[index].btn
        setQuestions(cp)
    }

    const addOptionToQuestion = (index) => {
        const cp = [...questions]
        cp[index].options.push({ desc: "" })
        setQuestions(cp);
    }

    const delOptionToQuestion = (index, o_index) => {
        const cp = [...questions]
        cp[index].options.splice(o_index, 1)
        setQuestions(cp);
    }

    const editOptionToQuestion = (index, o_index, text) => {
        const cp = [...questions]
        cp[index].options[o_index].desc = text
        setQuestions(cp);
    }
    const f1 = async () => {
        await addQuestion(title);
        setTitle('');
    }

    const f2 = async () => {
        await qPost();
        setQuestions([])
    }

    return (
        <div className='main-row'>
            <div className='input'>
                <div className='main'>
                    <input className='input' value={title} placeholder='input title' onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className='main-row'>
                    <button className='input-title' onClick={e => f1()}>add</button>
                    <button className='input-title' onClick={e => f2()}>submit all questions</button>
                </div>
            </div>
            <div className='main'>
                {
                    questions.map((q, index) => {
                        return <div key={index}>
                            {q.btn === true ? q.title
                                :
                                <div className='questions'>
                                    <input value={q.title} onChange={e => editTitle(index, e.target.value)} style={{ fontSize: 20 }}></input >
                                    <select value={q.qType} onChange={e => editqType(index, e.target.value)} style={{ fontSize: 20 }}>
                                        <option value='checkbox'>checkbox</option>
                                        <option value='question'>question</option>
                                    </select>
                                    <br />
                                    {
                                        (q.qType === "checkbox") ?
                                            <>
                                                <span style={{ fontSize: 18 }}>options</span>
                                                <div style={{ paddingLeft: 20, }}>
                                                    {
                                                        q.options.map((option, o_index) => {
                                                            return <div key={index}>
                                                                <input value={option.desc} placeholder={'option' + (o_index + 1)} onChange={e => editOptionToQuestion(index, o_index, e.target.value)}></input>
                                                                <button onClick={e => delOptionToQuestion(index, o_index)}>delete option</button>
                                                            </div>
                                                        })
                                                    }
                                                    <button onClick={e => addOptionToQuestion(index)} >add option</button>
                                                </div></>
                                            :
                                            <textarea placeholder='typing description' value={q.desc} onChange={e => editDescription(index, e.target.value)}></textarea >
                                    }
                                    <br />
                                </div>
                            }
                            <button onClick={e => openQuestion(index)}> {q.btn === true ? 'edit' : 'done'} </button>
                            <button onClick={e => delQuestion(index)}> delete </button>
                        </div>
                    })
                }
            </div>
            <a href='https://gyu-2beside1.vercel.app/' ><img src="https://image.flaticon.com/icons/png/512/60/60817.png" className='home'></img></a>
        </div >

    )
}


export default CreateForm;