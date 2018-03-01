import React, { Component } from 'react';
import FormList from './FormList.js';

class Form extends Component {


    render() {
        return (
            <div>
                <FormList />
            </div>
        )
    }
}
export default Form;





















/*
    render() {
        return (
            <form>
                <h4>Students</h4>
                    <div className="amount">
                        <input type='text'>
                    </div>

                    <div className="students">
                        <input type="text" value={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}
                            placeholder={`Student name`}/>

                        <input type="text" value={this.state.points}
                            placeholder={`Points`} />
                        <button type="button"  className="small">-</button>
                    </div>
                <button>Submit</button>
            </form>
        );
    }
}*/







/*




    handleAddingStudent(students) {
        this.setState({
            Students: this.state.Students.concat([{ name: '', points: ''}])
        });
    }

*/
