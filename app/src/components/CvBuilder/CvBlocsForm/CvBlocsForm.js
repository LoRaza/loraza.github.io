/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Slider from '@material-ui/lab/Slider';
/**
 * Local import
 */


/**
 * Code
 */

const styles = theme => ({
  root: {
    width: '45%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Bio</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails id="bio">
          <Form id="bio-form">
            <FormGroup row>
              <Col sm={6} >
                <Input type="firstname" name="firstname" id="examplePassword" placeholder="Firstname" />
              </Col>
              <Col sm={6}>
                <Input type="Lastname" name="Lastname" id="examplePassword" placeholder="Lastname" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input type="Lastname" name="Lastname" id="examplePassword" placeholder="Lastname" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 6, order: 2, offset: 1 }}>
                <Input type="Birthday" name="Birthday" id="examplePassword" placeholder="Birthday" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input type="Adress" name="Adress" id="examplePassword" placeholder="Adress" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={6}>
                <Input type="Phone" name="Phone" id="examplePassword" placeholder="Phone" />
              </Col>
              <Col sm={6}>
                <Input type="Mail" name="Mail" id="examplePassword" placeholder="Mail" />
              </Col>
            </FormGroup>
            <Button size="lg" block>Submit</Button>
          </Form>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Graduations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form id="bio-form">
            <FormGroup row>
              <Col sm={12} >
                <Input type="firstname" Size="lg" name="firstname" id="forms" placeholder="Diploma" />
                <Input type="Lastname" Size="lg" name="Lastname" id="forms" placeholder="Year" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Label for="exampleSelect" id="labels">Skills Learned</Label>
                <Input type="select" Size="lg" name="select" id="forms"placeholder="Skills">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
            <Button size="lg" block>+ Add Item</Button>
          </Form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Experiences</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form id="bio-form">
            <FormGroup row>
              <Col sm={12} >
                <Input type="firstname" Size="lg" name="firstname" id="forms" placeholder="Job" />
                <Input type="Lastname" Size="lg" name="Lastname" id="forms" placeholder="Year" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Label for="exampleSelect" id="labels">Skills Used</Label>
                <Input type="select" Size="lg" name="select" id="forms"placeholder="Skills">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
            <Button size="lg" block>+ Add Item</Button>
          </Form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Skills</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form id="bio-form">
            <FormGroup row>
              <Col sm={12} >
                <Input type="firstname" Size="lg" name="firstname" id="forms" placeholder="Skills/Software" />
              </Col>
            </FormGroup>
            <Button size="lg" block>+ Add Item</Button>
            <Slider value={value} min={0} max={6} step={1} onChange={this.handleChange} />
          </Form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};
const CvBlocsForm = withStyles(styles)(SimpleExpansionPanel);
export default CvBlocsForm;

/**
 * Export
 */
