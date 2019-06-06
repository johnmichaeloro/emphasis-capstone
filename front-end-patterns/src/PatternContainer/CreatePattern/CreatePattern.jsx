import React, {Component} from 'react';

class CreatePattern extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      publication: '',
      year: '',
      url: '',
      patternType: {
        name: '',
        description: ''
      },
      patternDetails: null,
      description: '',
      text: [{
        text: '',
        analysis: null,
        data: null
      }],
      commentary: ''
    }
  }

  updatePattern = (e) => {
    console.log(e.currentTarget.value, 'this is update pattern');
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  typeMapper = this.props.patternTypes.map((patternType) => {
    console.log('this is mapped patternType in create', patternType);
    return(
      <option key={patternType._id} name='patternDetails' value={patternType._id}>{patternType.patternType}</option>
    )
  })

  render(){

    let descriptionMapper;
    this.props.patternTypes.forEach((patternType) => {
      if(patternType._id === this.state.patternDetails){
        descriptionMapper = patternType.description;
      }
    })

    return(
      <div>
        <form onSubmit={this.props.addPattern.bind(null, this.state)}>
          <h2>Add a pattern to the catalog</h2>
          <label>
            Title: <input type='text' name='title' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Author: <input type='text' name='author' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Publication: <input type='text' name='publication' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Year: <input type='text' name='year' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            URL: <input type='text' name='url' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Pattern Type: <select name='patternType.name' onChange={this.updatePattern}>{this.typeMapper}</select>
          </label>
          <br/>
          <label>
              Description: <input name='patternType.description' onChange={this.updatePattern} value={descriptionMapper} />
          </label>
          <br/>
          <label>
            Text: <input type="text" name='text' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Commentary: <input name='commentary' onChange={this.updatePattern} />
          </label>
          <br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default CreatePattern;
