import React from 'react'
import { withStyles } from 'material-ui/styles';
import Header from '../../components/UI/Header/Header';
import Auxi from '../../hoc/Auxi/Auxi';
// import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button';
//import CreateScheme from '../../components/UI/Modal/CreateScheme';
import Modal from 'react-bootstrap/Modal'
import './TripConfiguration.css';
// import 'bootstrap/dist/css/bootstrap.css';
import FontIcon from '../common/FontIcon'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";



class TripConfiguration extends React.Component {
    
    state = {
        schemeData: {
            metircs: '',
            description: 'Over speeding in a given time',
        },
        show: false,
        tableData:false,
        isBtnDisable:false
       
    };


    handleShow = () => {
        this.setState({ show: true });
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    changeHandler = (event) => {
       
        if(event.target.value === ''){
           
            this.setState({ isBtnDisable: false});
        }else{
            this.setState({ isBtnDisable: true });
        }
      
        let metircs = event.target.value
        this.setState(state => ({ schemeData: Object.assign({}, state.schemeData, { metircs: metircs }) }));

    }
  
   
    createSchemeHandler = () => {
        console.log("createSchemeHandler", this.state.schemeData)
        if(this.state.schemeData.metircs){
            this.setState({tableData:true})
           
        }
        this.setState({ show: false });
    }

    render() {

        let tableData = null;
          if(this.state.schemeData.metircs && this.state.tableData){
            tableData = <table className="table table-hover MarginTop10">
            <thead>
                <tr >
                    <td >Metircs</td>
                    <td>Description</td>
                    <td>Reference</td>
                    <td >Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.schemeData.metircs}</td>
                    <td>Over speeding in a given time</td>
                    <td><span className="Badge">3</span></td>

                    {/* <td><i className="fa fa-pencil cursor-pointer"></i>&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-trash text-red"></i></td> */}
                    {/* <td>  <FontIcon icon={'eye'}  /></td> */}
                   
                    <td> <FontIcon icon={faEye}/>&nbsp;&nbsp;&nbsp;&nbsp;<FontIcon icon={faTrashAlt} className='Red-color'/></td>
                </tr>
            </tbody>
        </table>

          }

        return (

            <Auxi>

                <Header title='Trip Scheme' />

                <div className='Scheme-container'>
                    <div className='Scheme-body'>

                        <div className='Scheme-details'>
                            <div className='Scheme-create col-md-6'>
                                <h4>Scheme</h4>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Search Trip Scheme" type="search" />
                                </div>
                                <button className='btn btn-danger' onClick={this.handleShow} >Create Scheme</button>
                                    {tableData}
                               

                            </div>
                            <div className='Scheme-rules col-md-6'>
                                <h4>new Scheme</h4>
                                <p>Version 1.0</p>
                                <div className="col-lg-12 RulesDiv">
                                    <div className="MarginTop10">
                                        <label><b>Owner:</b></label><label ><b>Admin</b></label>
                                    </div>
                                    <div>
                                        <label><b>Modified on :</b></label><label><b>24-08-2018 10:10</b></label>
                                    </div>
                                    <div>
                                        <label><b>Single pick single drop moment from plant to hub</b></label>
                                    </div>
                                    <h4><b>Rules(3)</b></h4>
                                    <table className="table table-striped">
                                        <tbody >
                                            <tr >
                                                <td>1</td>
                                                <td>Create Trip</td>
                                                <td >Parses Body</td>
                                                
                                                <td> <FontIcon icon={faEye}/>&nbsp;&nbsp;&nbsp;&nbsp;<FontIcon icon={faTrashAlt} className='Red-color'/></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>End Trip</td>
                                                <td>Set the row Id</td>
                                                <td> <FontIcon icon={faEye}/>&nbsp;&nbsp;&nbsp;&nbsp;<FontIcon icon={faTrashAlt} className='Red-color'/></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Send HA alert</td>
                                                <td>Remove the line with offset</td>
                                                <td> <FontIcon icon={faEye}/>&nbsp;&nbsp;&nbsp;&nbsp;<FontIcon icon={faTrashAlt} className='Red-color'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* for creating scheme modal*/}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='Modal-title'>Create Trip Scheme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <h4 className='Modal-body'>Scheme Name</h4>
                        <div className="form-group">
                            <input className="form-control" placeholder="Search Trip Scheme" type='text' onChange={(event) => this.changeHandler(event)} />
                          
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='Modal-button'>
                        {/* <div className='Modal-button'> */}
                        <button className='btn btn-outline-secondary btn-sm ' onClick={this.handleClose}>Close </button>
                        <button className='btn btn-danger btn-sm ' type='submit' onClick={this.createSchemeHandler} disabled={!this.state.isBtnDisable}>Create Scheme</button>
                        {/* </div> */}
                    </Modal.Footer>
                </Modal>
            </Auxi>

        )
    }
}

export default withStyles()(TripConfiguration)