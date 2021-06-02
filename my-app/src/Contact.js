import React,{Component} from "react";
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddConModal} from './AddConModal';
import {EditConModal} from './EditConModal';


export class Contact extends Component{

    constructor(props){
        super(props);
        this.state={cons:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API)
        .then(response=>response.json())
        .then(data=>{
            
            this.setState({cons:data});
    });
    }

    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }

    deleteCon(conid){
        if(window.confirm("Are you sure?")){
            fetch(process.env.REACT_APP_API+conid,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const{cons, conid, conname,conmbi, contel}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Emri</th>
                        <th>Mbiemri</th>
                        <th>Numri Tel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cons.map(con=>
                            <tr key={con.Id}>
                                <td>{con.Id}</td>
                                <td>{con.Emri}</td>
                                <td>{con.Mbiemri}</td>
                                <td>{con.Telefoni}</td>
                                <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,
        conid:con.Id, conname:con.Emri, conmbi:con.Mbiemri, contel:con.Telefoni})}>
            Edito
        </Button>
        <Button className="mr-2" variant="danger" onClick={()=>this.deleteCon(conid)}>
            Fshij
        </Button>
    </ButtonToolbar>  

    <EditConModal show={this.state.editModalShow} onHide={editModalClose} conid={conid} conname={conname} conmbi={conmbi} contel={contel}/>
                                </td>
                        </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                        Contact US
                    </Button>
                    <AddConModal show={this.state.addModalShow} onHide={addModalClose}>

                    </AddConModal>
                </ButtonToolbar>
            </div>
        )
    }
}