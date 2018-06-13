/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProfileBloc from 'src/components/CvUser/ProfileBloc';

/**
 * Code
 */
const mapStateToProps = state => ({
  firstname: state.profile.firstname,
  lastname: state.profile.lastname,
  birthday: state.profile.birthday,
  adress: state.profile.adress,
  mail: state.profile.mail,
  phone: state.profile.phone,
  urlPicture: state.profile.urlPicture,
});

const ProfileBlocContainer = connect(
  mapStateToProps, // Lecture depuis le state
  null, // Écriture dans le state
)(ProfileBloc);

/**
 * Export
 */
export default ProfileBlocContainer;
