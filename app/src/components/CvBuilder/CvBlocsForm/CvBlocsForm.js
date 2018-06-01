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
import TextField from '@material-ui/core/TextField';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
/**
 * Local import
 */


/**
 * Code
 */

const styles = theme => ({
  root: {
    width: '20%',
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
          <Columns size="small"
            masonry>
            <Box align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2">
              <TextField label="Nom" />
            </Box>
            <Box align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2">
              <TextField label="Prénom" />
            </Box>
            <Box align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2">
              <TextField label="Email" />
              <Box align="center"
                pad="medium"
                margin="small"
                colorIndex="light-2">
                <TextField label="Adresse" />
              </Box>
              <Box align="center"
                pad="medium"
                margin="small"
                colorIndex="light-2">
                <TextField label="Téléphone" />
              </Box>
              <Box align="center"
                pad="medium"
                margin="small"
                colorIndex="light-2">
                <TextField label="Date de naissance" />
              </Box>
            </Box>
          </Columns>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Bloc-skill</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Columns size="small"
            masonry>
            <Box align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2">
              <TextField label="Skill" />
            </Box>
          </Columns>
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
