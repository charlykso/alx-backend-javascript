import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((data) => ({
        status: data.status,
        value: data.status === 'fulfilled' ? data.value : String(data.reason),
      }))
    ));
}
export default handleProfileSignup;
