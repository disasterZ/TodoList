import React,{Component} from 'react';

//生命周期函数指在某一个时刻组件会自动调用执行的函数
class LifeCycle extends Component{

    //es6的生命周期函数（Initialization）
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        };
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    
    //在组件即将被挂载到页面的时候执行
    componentWillMount(){
        console.log('compontentWillMount');
    }

    render(){
        return (<input 
            id='insert'
            className='input'
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            ref={(input)=>{this.input=input}}
        />)
    }

    //组件被挂载到页面之后再执行
    componentDidMount(){
        console.log("compontentDidMount");
    }

    //组件更新前会自动执行
    shouldComponentUpdate(){
        console.log("shouldCompontentUpdate")
        return true;
    }

    //组件被更新前自动执行，在shouldCompontentUpdate返回true后
    componentWillUpdate(){
        console.log("compontentWillUpdate")
    }

    //组件更新完成之后，会被执行
    componentDidUpdate(){
        console.log("compontentDidUpdate")
    }

		//当一个组件从父组件接收参数
		//当父组件的render函数被执行了，子组件的生命周期函数会被执行
    componentWillReceiveProps(){
        console.log("compontentWillReceiveProps")
		}
		
		//当组件即将被从页面中剔除的时候，会被执行
		componentWillUnmount(){
			console.log("compontentWillUnmount")
		}

    handleInputChange(){
        const value=this.input.value
        this.setState(()=>({
            inputValue:value
        }))
    }
}

export default LifeCycle;