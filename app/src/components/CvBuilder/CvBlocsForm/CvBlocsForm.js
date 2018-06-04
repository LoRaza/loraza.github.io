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
                <Input className=".background-form" type="firstname" name="firstname" placeholder="Firstname" />
              </Col>
              <Col sm={6}>
                <Input className=".background-form" type="Lastname" name="Lastname" placeholder="Lastname" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input className=".background-form" type="Lastname" name="Lastname" placeholder="Lastname" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 6, order: 2, offset: 1 }}>
                <Input className=".background-form" type="Birthday" name="Birthday" placeholder="Birthday" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input className=".background-form" type="Adress" name="Adress" placeholder="Adress" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={6}>
                <Input className=".background-form" type="Phone" name="Phone" placeholder="Phone" />
              </Col>
              <Col sm={6}>
                <Input className=".background-form" type="Mail" name="Mail" placeholder="Mail" />
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
                <Input className=".background-form" type="firstname" Size="lg" name="firstname" id="forms" placeholder="Diploma" />
                <Input className=".background-form" type="Lastname" Size="lg" name="Lastname" id="forms" placeholder="Year" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input className=".background-form" type="textarea" name="text" id="exampleText" placeholder="Skills Used" />
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
                <Input className=".background-form" type="firstname" Size="lg" name="firstname" id="forms" placeholder="Job" />
                <Input className=".background-form" type="Lastname" Size="lg" name="Lastname" id="forms" placeholder="Year" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input className=".background-form" type="textarea" name="text" id="exampleText" placeholder="Skills Used" />
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
                <Input className=".background-form" type="firstname" Size="lg" name="firstname" id="forms" placeholder="Skills/Software" />
              </Col>
            </FormGroup>
            <Button size="lg" block>+ Add Item</Button>
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
