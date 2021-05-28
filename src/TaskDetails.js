import {Container, Row, Col} from 'react-bootstrap';


function TaskDetails (props){
const style_h={
        color:"white",
        backgroundColor:'#f1356d',
        borderRadius:'8px',
        padding:'5px'
        }
const style_b={
        color:"black",
        fontWeight:'500',
        fontSize:'17px',
        borderRadius:'8px',
        padding:'8px',

        }
const thiss=props.thiss;
  return(


    <Container className= "task-details">
      <Row>
        <h3>
            <span style={style_h}>Order No: </span>
        </h3>
        <span style = {style_b}>{thiss.state.selectedPlace.seq}</span>
      </Row>

      <Row>
        <h3>
            <span style={style_h}>Name: </span>
        </h3>
        <span style={style_b}>{thiss.state.selectedPlace.name}</span>
      </Row>

      <Row>
        <h3>
            <span style={style_h}>Address: </span>
        </h3>
        <span style={style_b}>{thiss.state.selectedPlace.info}</span>
      </Row>
    </Container>

  );

}

export default TaskDetails;