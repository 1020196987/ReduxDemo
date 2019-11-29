import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputVal = this.changeInputVal.bind(this)
        //订阅
        store.subscribe(this.storeChange)
    }
    render() { 
        return (
            <div style={{margin: 10}}>
                <div>
                    <Input
                        placeholder='Write Some things'
                        style={{width: 200}}
                        onChange={this.changeInputVal}
                        ref={(input) => {this.input = input}}
                        value={this.state.inputVal}
                    />
                    <Button type='primary' onClick={this.addList}>增加</Button>
                </div>
                <div style={{margin: 10}}>
                    <List
                        bordered
                        dataSource={this.state.content}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    >
                    </List>
                </div>
            </div>
        );
    }
    changeInputVal(e) {
        // console.log(this.input)
        const action = {
            type: 'inputVal',
            value: e.target.value
        }
        store.dispatch(action)
        // console.log(this.input.state.value)
        // console.log(e.target.value)
        
    }
    addList = () => {
        // console.log(this.input.state.value)
    }
    storeChange = ()=>{
        console.log('订阅了')
        console.log(store.getState())
        this.setState(store.getState())
    }

}
 
export default TodoList

