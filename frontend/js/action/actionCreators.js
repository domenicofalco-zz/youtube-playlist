export const clickUser = (user) => {
  console.log(user.name);
  return {
    type: 'CLICKED_ACTION',
    pauyload: user
  }
}
