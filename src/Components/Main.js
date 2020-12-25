import React,{Component} from 'react';
import {connect} from 'react-redux';
import Note from './Note';
import { addNote } from '../redux/ActionCreators';

const mapStateToProps = state => {

    return {
        notes : state
    }
}

const mapDispatchToProps = dispatch => ({
    addNote : (noteId, title, description) => dispatch(addNote(noteId, title, description))
});

class Main extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props)
        return(
            <Note notes={this.props.notes} addNote={this.props.addNote}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);