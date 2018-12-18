import React, { Component } from 'react';

import {
  Button,
  Grid,
  Segment,
  Modal,
  Header,
  Image,
  Icon
} from 'semantic-ui-react';
import sampleQuestions from "./sampleQuestions.json";

import './questionAnswer.css';

export default class QuestionAnswer extends Component {
  constructor(props)
   {
     super(props);
     this.state={
       allQuestions:[],
       totalScore:0
     }
     this.submitClick = this.submitClick.bind(this);
     this.modalClose = this.modalClose.bind(this);
   }
   componentDidMount(){
     sampleQuestions.map((item, i) => {
       item["selectedAnswer"] = ['lightgrey','lightgrey','lightgrey','lightgrey'];
       item["ansToCompareWith"]='';
     });
     this.setState(() => {
       return {allQuestions: sampleQuestions};
     });
   }
   optionClick(questionId,value,item){
     console.log("selected",questionId,value,item);
     let temp =this.state.allQuestions;
     if(value == 'A'){
       if(temp[questionId].selectedAnswer[0] == 'green'){
         temp[questionId].selectedAnswer[0] = 'lightgrey';
         temp[questionId].ansToCompareWith='';
       }
       else{
         temp[questionId].selectedAnswer[0] = 'green';
         temp[questionId].selectedAnswer[1] = 'lightgrey';
         temp[questionId].selectedAnswer[2] = 'lightgrey';
         temp[questionId].selectedAnswer[3] = 'lightgrey';
         temp[questionId].ansToCompareWith='op1';
       }
     }
     else if(value == 'B'){
       if(temp[questionId].selectedAnswer[1] == 'green'){
         temp[questionId].selectedAnswer[1] = 'lightgrey';
         temp[questionId].ansToCompareWith='';
       }
       else{
         temp[questionId].selectedAnswer[1] = 'green';
         temp[questionId].selectedAnswer[0] = 'lightgrey';
         temp[questionId].selectedAnswer[2] = 'lightgrey';
         temp[questionId].selectedAnswer[3] = 'lightgrey';
         temp[questionId].ansToCompareWith='op2';
       }
     }
     else if(value == 'C'){
       if(temp[questionId].selectedAnswer[2] == 'green'){
         temp[questionId].selectedAnswer[2] = 'lightgrey';
         temp[questionId].ansToCompareWith='';
       }
       else{
         temp[questionId].selectedAnswer[2] = 'green';
         temp[questionId].selectedAnswer[0] = 'lightgrey';
         temp[questionId].selectedAnswer[1] = 'lightgrey';
         temp[questionId].selectedAnswer[3] = 'lightgrey';
         temp[questionId].ansToCompareWith='op3';
       }
     }
     else if(value == 'D'){
       if(temp[questionId].selectedAnswer[3] == 'green'){
         temp[questionId].selectedAnswer[3] = 'lightgrey';
         temp[questionId].ansToCompareWith='';
       }
       else{
         temp[questionId].selectedAnswer[3] = 'green';
         temp[questionId].selectedAnswer[0] = 'lightgrey';
         temp[questionId].selectedAnswer[1] = 'lightgrey';
         temp[questionId].selectedAnswer[2] = 'lightgrey';
         temp[questionId].ansToCompareWith='op4';
       }
     }
     this.setState({allQuestions:temp});
   }
   submitClick(){
     console.log("result",this.state.allQuestions);
     let score = 0;
     this.state.allQuestions.map((item,key)=>{
       if(item.ans == item.ansToCompareWith){
         score++;
       }
     })
     console.log("score",score);
     this.setState({modalOpen:true,totalScore:score});
   }
   modalClose(){
     this.setState({modalOpen:false},()=>{
       location.reload();
     });
   }
  render(){
    let smiley_face='';
    if(this.state.totalScore==5){
      smiley_face = "../images/perfect.jpg";
    }
    else if(this.state.totalScore<5 && this.state.totalScore>=3){
      smiley_face = "../images/happy.jpg";
    }
    else{
      smiley_face = "../images/medium.png";
    }
    return(
      <div className="customStyle">
    {this.state.allQuestions.map((item,i)=>{
      // console.log("item",item);

      return(
        <Grid style={{marginTop:'5%'}}>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={1}>
              <Segment raised style={{textAlign:'center'}}>
                {i+1}
              </Segment>
            </Grid.Column>
            <Grid.Column width ={10}>
              <Segment raised>
                {item.question}
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
          {item.image_url.length!=0?
            <Grid.Row>
              <Grid.Column width={4}/>
              <Grid.Column width={10}>
                <Image src={item.image_url} size='small' />
              </Grid.Column>
              <Grid.Column width={3}/>
            </Grid.Row>
            :
            ""
          }
          {item.audio_url.length!=0?
            <Grid.Row>
              <Grid.Column width={4}/>
              <Grid.Column width={10}>
                <audio controls>
                  <source src={item.audio_url} type="audio/mpeg"/>
                  Your browser does not support the audio element.
                </audio>
              </Grid.Column>
              <Grid.Column width={3}/>
            </Grid.Row>
            :
            ""
          }

          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={10} >
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Segment raised className='options' onClick={this.optionClick.bind(this,i,'A',item)}>
                      <Grid>
                        <Grid.Column width={1} style={{backgroundColor:item.selectedAnswer[0]}}/>
                        <Grid.Column width={14}>
                            A. {item.op1}
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Segment raised className='options' onClick={this.optionClick.bind(this,i,'B',item)}>
                      <Grid>
                        <Grid.Column width={1} style={{backgroundColor:item.selectedAnswer[1]}}/>
                        <Grid.Column width={14}>
                            B. {item.op2}
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-1%'}}>
                  <Grid.Column width={8}>
                    <Segment raised className='options' onClick={this.optionClick.bind(this,i,'C',item)}>
                      <Grid>
                        <Grid.Column width={1} style={{backgroundColor:item.selectedAnswer[2]}}/>
                        <Grid.Column width={14}>
                            C. {item.op3}
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Segment raised className='options' onClick={this.optionClick.bind(this,i,'D',item)}>
                      <Grid>
                        <Grid.Column width={1} style={{backgroundColor:item.selectedAnswer[3]}}/>
                        <Grid.Column width={14}>
                            D. {item.op4}
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      )
    })}
    <Grid style={{marginTop:'3%',marginBottom:'1%'}}>
      <Grid.Row>
        <Grid.Column width={14} style={{textAlign:'right'}}>
          <Button color='red' style={{marginRight:'1%'}}> <Icon name='remove' />Cancel</Button>
          <Button color='green' onClick={this.submitClick}> <Icon name='checkmark' />Submit</Button>

        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
    <Modal dimmer='blurring' open={this.state.modalOpen} basic size='tiny'>
      <Header as="h2" icon='gift' content='Congratulations !!!' />
      <Modal.Content style={{textAlign:'center'}}>
          <Header as="h3" style={{color:'white'}}>
            You got {this.state.totalScore} correct out of 5 &nbsp;&nbsp;<Image src={smiley_face} size='large' />
        </Header>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green'  onClick={this.modalClose}>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
    );
  }
}
