import React, { Component } from 'react';

class UpdateContent extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
      // 한 함수를 재활용하여 id, desc에서 둘다 쓰고 싶을때
      // [e.target.name] 이 문법은 해당 타겟의 이름을 알려주는 최신 문법이다.
      // title, desc 모두 자동으로 끌어오게 된다.
    }
    render() {
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post" 
            onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  this.state.id,
                  this.state.title, 
                  this.state.desc
              );
            }.bind(this)}>

            <input type="hidden" name="id" value={this.state.id}></input>  
            <p>
               <input type="text" 
                      name="title" 
                      placeholder="title"
                      value={this.state.title}
                      onChange={this.inputFormHandler}>
               </input>
               {/* value={this.props.data.title}은 불가능(값을 직접 바꿀수X) 
               대신 state로 만들어서 사용할 수 있다. 위에 state를 만든이유
               그러나 그래도 에러가 생긴다. 
               우리가 원하는 건 input내용이 바뀔때 state도 바뀌는 것,
               그렇게 쓰려면 반드시 onchange로 써야한다.*/}
            </p>
            <p>
               <textarea name="desc" 
                         placeholder="description"
                         value={this.state.desc}
                         onChange={this.inputFormHandler}>
                        {/* onChange를 통해 readonly를 write로 바꿀수있음 */}
               </textarea>
            </p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      )
    }
  }
  
export default UpdateContent;  
   