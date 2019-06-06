import React from 'react';

const PatternEditor = (props) => {
  console.log('this is props.patternToEdit.text in PatternEditor', props.patternToEdit.text);

  const typeMapper = props.patternTypes.map((patternType) => {
    if(patternType.patternType.description !== props.patternToEdit.patternType.description){
          return(
            <option key={patternType._id} name='patternType.name' value={patternType._id}>{patternType.patternType.name}</option>
          );
        }
        });

  typeMapper.unshift(<option key={props.patternToEdit.patternDetails._id} name='patternDetails' value={props.patternToEdit.patternDetails._id}>{props.patternToEdit.patternType.name}</option>);


  return(
    <div>
      <form onSubmit={props.editPattern}>
        <h2>Edit a Pattern</h2>
        <label>
          Edit Title: <input type='text' name='title' onChange={props.handleFormChange} value={props.patternToEdit.title} />
        </label>
        <br/>
        <label>
          Edit Author: <input type='text' name='author' onChange={props.handleFormChange} value={props.patternToEdit.author} />
        </label>
        <br/>
        <label>
          Edit Publication: <input type='text' name='publication' onChange={props.handleFormChange} value={props.patternToEdit.publication} />
        </label>
        <br/>
        <label>
          Edit Year: <input type='text' name='year' onChange={props.handleFormChange} value={props.patternToEdit.year} />
        </label>
        <br/>
        <label>
          Edit URL: <input type='text' name='url' onChange={props.handleFormChange} value={props.patternToEdit.url} />
        </label>
        <br/>
        <label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        Edit Pattern Type: <select name='patternType.name' onChange={props.handleFormChange}>{typeMapper}</select>
        </label>
        <br/>
        <label>
          Edit Description: <input name='patternType.description' onChange={props.handleFormChange} value={props.patternToEdit.patternType.description} />
=======
=======
>>>>>>> parent of 2a37138... fixed map issues on forms
=======
>>>>>>> parent of 2a37138... fixed map issues on forms
          Edit Pattern Type: <select name='patternType' value={props.patternToEdit.patternType}></select>
        </label>
        <br/>
        <label>
          Edit Description: <input name='description' onChange={props.handleFormChange} value={props.patternToEdit.description} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 2a37138... fixed map issues on forms
=======
>>>>>>> parent of 2a37138... fixed map issues on forms
=======
>>>>>>> parent of 2a37138... fixed map issues on forms
        </label>
        <br/>
        <label>
          Edit Text: <input name='text' onChange={props.handleFormChange} value={props.patternToEdit.text[0].text} />
        </label>
        <br/>
        <label>
          Edit Commentary: <input name='commentary' onChange={props.handleFormChange} value={props.patternToEdit.commentary} />
        </label>
        <br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default PatternEditor;
