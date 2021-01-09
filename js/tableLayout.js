var dataItem = new Vue({
  el: '#app',
  data: {
    users: usersData.users,
    keyword: ''
  },
  computed: {
    filterUsers: function () {
      const searchWord = this.keyword.trim();

      if (!searchWord) return this.users;

      return this.users.filter(user => {
        return user.userId.toUpperCase().includes(searchWord.toUpperCase())
          || user.userName.toUpperCase().includes(searchWord.toUpperCase())
      });
    }
  }
})
