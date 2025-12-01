const { getUserData, getRoleByUserList } = require('./func');

async function main() {
    console.time('process');
    const users = await getUserData();
    const userWithRole = await getRoleByUserList(users);
    console.log(userWithRole);
    console.timeEnd('process');
  
}


main();