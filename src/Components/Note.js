import React , {Component}  from 'react';
import {Media, Modal, ModalBody, ModalHeader, Button, Label, Row, Col} from 'reactstrap';
import {Accordion , AccordionItem} from 'react-light-accordion';
import { Control, Errors, LocalForm } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class Note extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }    

    handleSubmit(values){
        this.props.addNote(this.props.notes.length,values.title, values.description);

    }
    handleDelete(e){
        console.log(e.parentNode);
    }

    render(){

        const lists = this.props.notes.map((note) => {
            return (
                <div key={note.id} className="note">
                    <AccordionItem title={note.title} className="col-12 mt-4">
                        <div className="ml-3 mb-3">{note.description}</div>
                    </AccordionItem> 

                    <Button onClick={(val)=>this.handleDelete(val)}><span className="fa fa-trash"></span></Button>
                </div>
            );
        });

        return (
            <div className="container d-flex justify-content-center align-items-center notes col-3">
                <div className="row row-content d-flex">
                    <div>
                        <div className="col-12 heading">
                            Notes
                        </div>
                        <Media list className="col-12">
                            <Accordion atomic="true">
                                {lists}
                            </Accordion>
                        </Media>
                    </div>
                    <Button className="add-notes align-self-end ml-auto mr-2"outline onClick={this.toggleModal}>
                        <span className="fa fa-plus-circle"></span>
                    </Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Notes</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor=".title" xs={12}>Title</Label>
                                <Col xs={12}>
                                    <Control.text model=".title" id="title" name="title" placeholder="Title" className="form-control" 
                                        validators={{required, maxLength : maxLength(20) }}/>
                                    <Errors model=".title" className="text-danger" show="touched" 
                                        messages={{ required : 'Required', maxLength : 'Title should be precise and short'}} />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor=".description" xs={12}>Description</Label>
                                <Col xs={12}>
                                    <Control.textarea model=".description" id="description" name="descritpion" placeholder="Description" className="form-control" 
                                        rows={3} validators={{required}} />
                                    <Errors model=".description" className="text-danger" show="touched" 
                                        messages={{ required : 'Required'}} />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:4, offset:4}}>
                                    <Button type="submit" color="primary" onClick={this.toggleModal}>Add Note</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Note;