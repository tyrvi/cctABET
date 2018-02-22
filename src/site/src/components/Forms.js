import React, { Component } from 'react';

export default class Forms extends Component {
    constructor() {
        super();
        this.state = {
            Students: [],
        };
    }
    //[{name: '', points: ''}]
    handleAddingStudent(students) {
        this.setState({
            Students: this.state.Students.concat([{ name: '', points: ''}])
        });
    }

    render() {
        return (
          <form>
            <h4>Students</h4>
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
}
