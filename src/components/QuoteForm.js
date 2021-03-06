import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard'

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    
    const quote = {...this.state, id: uuid(), votes: 0}

    this.props.addQuote(quote)
    // because of dispatch thingy

    
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name='content'
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return (
    {
      addQuote: (quote) => {
        dispatch({
          type: 'ADD_QUOTE',
          quote: quote
        })
      }
    }
  )

}
//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
// which component am I adding these props to (QuoteForm)
