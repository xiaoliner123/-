import React,{Component}from 'react'
import styles from '../styles/Home.module.css'
export default class Chat extends Component{
    state = {
        text:'这是正文内容',
        boolT:false,
        boolF:false
    }
    update = (event) =>{
        this.setState({
            text:event.target.value
        })
    }
    popTup = () =>{
        if(!this.state.boolT){
            this.setState({
                boolT:true,
                boolF:false
            })
        }else{
            this.setState({
                boolT:false
            })
        }
    }
    popFup = () =>{
        if(!this.state.boolF){
            this.setState({
                boolF:true,
                boolT:false 
            })
        }else{
            this.setState({
                boolF:false
            })
        }
    }
    render(){
        const boolT = this.state.boolT
        const boolF = this.state.boolF
        return (
            <div className={styles.box}>
                <div className={styles.box1}>{this.state.text}</div>  
                    {
                   boolT ? <div className={styles.popbox1}>您确定了</div> : (boolF ? <div className={styles.popbox2}>您取消了</div> : null) 
                    }

                <div className={styles.box2}>
                        <input className={styles.inputBox} onChange={(event) =>this.update(event)}/>
                        <button className={styles.button} onClick={this.popTup}>确定</button>
                        <button className={styles.button} onClick={this.popFup}>取消</button>
                </div>
            </div>
        )
    }
}