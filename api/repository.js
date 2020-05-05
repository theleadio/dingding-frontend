export default (axios) => ({
  aloha () {
    console.log('method 1');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  },

  checkOwner(id) {
    return axios.$get('owner/' + id)
  }
})