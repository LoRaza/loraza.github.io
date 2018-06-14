/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileForm from 'src/components/CvUser/ProfileForm';
import { inputChange, saveProfile } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
  birthday: state.birthday,
  adress: state.adress,
  mail: state.mail,
  phone: state.phone,
  urlPicture: state.urlPicture,
});

const mapDispatchToProps = dispatch => ({
  onSaveProfile: () => {
    dispatch(saveProfile());
  },

  onInputProfileChange: ({ name, value }) => {
    dispatch(inputChange({ name, value }));
  },


});

const ProfileFormContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(ProfileForm);

/**
 * Export
 */
export default ProfileFormContainer;
